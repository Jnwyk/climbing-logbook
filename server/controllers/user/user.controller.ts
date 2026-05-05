import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import prisma from "../../prismaClient";
import authMiddleware from "../../middleware/authentication.middleware";
import UserService from "./user.service";

class UserController implements Controller {
  public path = "/user";
  public router = Router();
  private service = new UserService();

  constructor() {
    this.initialiseUserRoutes();
  }

  private initialiseUserRoutes() {
    this.router.get(this.path, authMiddleware, this.getAll);
    this.router.post(`${this.path}/register`, this.register);
    this.router.post(`${this.path}/login`, this.login);
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({ users: users });
    } catch (error) {
      next(error);
    }
  };

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const [createdUser, token] = await this.service.registerUser(req.body);
      res.status(201).json({ user: createdUser, token: token });
    } catch (error) {
      next(error);
    }
  };

  private login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const [foundUser, token] = await this.service.loginUser(req.body);
      res.status(200).json({ user: foundUser, token: token });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
