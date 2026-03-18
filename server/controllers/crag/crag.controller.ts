import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";
import validationMiddleware from "../../middleware/validation.middleware";
import createCrag from "./crag.validate";
import createArea from "../area/area.validate";
import authMiddleware from "../../middleware/authentication.middleware";

class CragController implements Controller {
  public path = "/crag";
  public router = Router();

  constructor() {
    this.initialiseCragRoutes();
  }

  private initialiseCragRoutes() {
    this.router.use(this.path, authMiddleware);
    this.router.get(this.path, this.getAll);
    this.router.post(
      this.path,
      validationMiddleware([createCrag, createArea]),
      this.create,
    );
    this.router.put(
      `${this.path}/:country/:area/:crag`,
      validationMiddleware([createCrag, createArea]),
      this.update,
    );
    this.router.delete(`${this.path}/:country/:area/:crag`, this.delete);
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const crags = await prisma.crag.findMany();
    res.status(200).json({ crags: crags });
  };

  private create = async (req: Request, res: Response, next: NextFunction) => {
    const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
      name: req.body.area,
      country: req.body.country,
    };
    const cragData: Prisma.CragCreateInput = {
      name: req.body.crag,
      minGrade: req.body.minCragGrade,
      maxGrade: req.body.maxCragGrade,
      area: {
        connectOrCreate: {
          create: {
            name: req.body.crag,
            country: req.body.country,
            rockMaterial: req.body.rockMaterial,
            minGrade: req.body.minAreaGrade,
            maxGrade: req.body.maxAreaGrade,
          },
          where: {
            name_country: areaId,
          },
        },
      },
    };
    const createdCrag = await prisma.crag.create({ data: cragData });
    res.status(201).json({ crag: createdCrag });
  };

  private update = async (
    req: Request<{ crag: string; area: string; country: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
        name: req.params.area,
        country: req.params.country,
      };
      const cragId: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
        name: req.params.crag,
        areaName: req.params.area,
        country: req.params.country,
      };
      const cragData: Prisma.CragCreateInput = {
        name: req.body.crag,
        minGrade: req.body.minCragGrade,
        maxGrade: req.body.maxCragGrade,
        area: {
          connectOrCreate: {
            create: {
              name: req.body.area,
              country: req.body.country,
              rockMaterial: req.body.rockMaterial,
              minGrade: req.body.minAreaGrade,
              maxGrade: req.body.maxAreaGrade,
            },
            where: {
              name_country: areaId,
            },
          },
        },
      };
      const updatedArea = await prisma.crag.update({
        data: cragData,
        where: { name_areaName_country: cragId },
      });
      res.status(200).json({ crag: updatedArea });
    } catch (error) {
      next(error);
    }
  };

  private delete = async (
    req: Request<{ crag: string; area: string; country: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const cragId: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
        name: req.params.crag,
        areaName: req.params.area,
        country: req.params.country,
      };
      const deletedCrag = await prisma.crag.delete({
        where: { name_areaName_country: cragId },
      });
      res.status(200).json({ crag: deletedCrag });
    } catch (error) {
      next(error);
    }
  };
}

export default CragController;
