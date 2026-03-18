import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";
import validationMiddleware from "../../middleware/validation.middleware";
import authMiddleware from "../../middleware/authentication.middleware";
import createAscent from "./ascent.validate";

class AscentController implements Controller {
  public path = "/ascent";
  public router = Router();

  constructor() {
    this.initialiseCragRoutes();
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
      `${this.path}/:ascentId`,
      validationMiddleware([createAscent]),
      this.update,
    );
    this.router.delete(`${this.path}/:ascentId`, this.delete);
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const ascents = await prisma.ascent.findMany();
    res.status(200).json({ ascents: ascents });
  };

  private create = async (req: Request, res: Response, next: NextFunction) => {
    const ascentData: Prisma.AscentCreateInput = {
      ascentStyle: req.body.ascentStyle,
      personalOpinion: req.body.personalOpinion,
      user: {
        connect: {
          id: req.body.userId,
        },
      },
      route: {
        connect: {
          id: req.body.routeId,
        },
      },
    };
    const createdAscent = await prisma.ascent.create({ data: ascentData });
    res.status(201).json({ crag: createdAscent });
  };

  private update = async (
    req: Request<{ ascentId: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const ascentData: Prisma.AscentCreateInput = {
        ascentStyle: req.body.ascentStyle,
        personalOpinion: req.body.personalOpinion,
        user: {
          connect: {
            id: req.body.userId,
          },
        },
        route: {
          connect: {
            id: req.body.routeId,
          },
        },
      };
      const updatedArea = await prisma.ascent.update({
        data: ascentData,
        where: { id: req.params.ascentId },
      });
      res.status(200).json({ crag: updatedArea });
    } catch (error) {
      next(error);
    }
  };

  private delete = async (
    req: Request<{ ascentId: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const deletedAscent = await prisma.ascent.delete({
        where: { id: req.params.ascentId },
      });
      res.status(200).json({ crag: deletedAscent });
    } catch (error) {
      next(error);
    }
  };
}

export default AscentController;
