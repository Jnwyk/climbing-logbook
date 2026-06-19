import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";
import validationMiddleware from "../../middleware/validation.middleware";
import authMiddleware from "../../middleware/authentication.middleware";
import { createAscent, updateVisibilityAscent } from "./ascent.validate";
import AscentService from "./ascent.service";

class AscentController implements Controller {
  public path = "/ascent";
  public router = Router();
  private ascentService: AscentService;

  constructor(ascentService: AscentService) {
    this.initialiseCragRoutes();
    this.ascentService = ascentService;
  }

  private initialiseCragRoutes() {
    this.router.use(this.path, authMiddleware);
    this.router.get(this.path, this.getAll);
    this.router.post(
      this.path,
      validationMiddleware([createAscent]),
      this.create,
    );
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware([createAscent]),
      this.update,
    );
    this.router.delete(`${this.path}/:id`, this.delete);
    this.router.patch(
      `${this.path}/:id`,
      validationMiddleware([updateVisibilityAscent]),
      this.switchVisibility,
    );
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const ascents = await this.ascentService.getAllAscents();
    res.status(200).json({ ascents: ascents });
  };

  private create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdAscent = await this.ascentService.createAscent(req.body);
      res.status(201).json({ ascent: createdAscent });
    } catch (error) {
      next();
    }
  };

  private update = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const updatedAscent = await this.ascentService.updateAscent(
        { id: req.params.id },
        req.body,
      );
      res.status(200).json({ ascent: updatedAscent });
    } catch (error) {
      next(error);
    }
  };

  private delete = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const deletedAscent = await this.ascentService.deleteAscent({
        id: req.params.id,
      });
      res.status(200).json({ crag: deletedAscent });
    } catch (error) {
      next(error);
    }
  };

  private switchVisibility = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const updatedAscent = await this.ascentService.switchVisibilityAscent(
        { id: req.params.id },
        req.body,
      );
      res.status(200).json({ ascent: updatedAscent });
    } catch (error) {
      next(error);
    }
  };
}

export default AscentController;
