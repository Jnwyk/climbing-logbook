import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";
import validationMiddleware from "../../middleware/validation.middleware";
import HttpError from "../../utils/errors/HttpError";
import generateToken from "../../utils/generateToken";
import bcrypt from "bcrypt";
import verifyPassword from "../../utils/verifyPassword";
import { connect } from "http2";

class UserController implements Controller {
  public path = "/user";
  public router = Router();

  constructor() {
    this.initialiseUserRoutes();
  }

  private initialiseUserRoutes() {
    this.router.get(this.path, this.getAll);
    this.router.post(`${this.path}/register`, this.register);
    this.router.post(`${this.path}/login`, this.login);
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const users = await prisma.user.findMany();
    res.status(200).json({ users: users });
  };

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userExists = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (userExists) {
        return next(new HttpError(400, "User already exists"));
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const createdUser = await prisma.user.create({
        data: {
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role,
        },
      });
      const token = generateToken(createdUser);
      res.status(201).json({ user: createdUser, token: token });
    } catch (error) {
      next(error);
    }
  };

  private login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const foundUser = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (!foundUser) return next(new HttpError(404, "User not found"));
      const isPasswordValid = await verifyPassword(
        foundUser.password,
        req.body.password,
      );
      if (!isPasswordValid)
        return next(new HttpError(401, "Incorrect credentials"));
      const token = generateToken(foundUser);
      res.status(200).json({ user: foundUser, token: token });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
