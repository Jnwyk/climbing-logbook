import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import { Prisma } from "@prisma/client";
import prisma from "../../prismaClient";
import validationMiddleware from "../../middleware/validation.middleware";
import createArea from "./area.validate";
import authMiddleware from "../../middleware/authentication.middleware";

class AreaController implements Controller {
  public path = "/area";
  public router = Router();

  constructor() {
    this.initialiseAreaRoutes();
  }

  private initialiseAreaRoutes() {
    this.router.use(this.path, authMiddleware);
    this.router.get(this.path, this.getAll);
    this.router.post(
      this.path,
      validationMiddleware([createArea]),
      this.create,
    );
    this.router.put(
      `${this.path}`,
      validationMiddleware([createArea]),
      this.update,
    );
    this.router.delete(`${this.path}/:country/:area`, this.delete);
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const areas = await prisma.area.findMany();
    res.status(200).json({ areas: areas });
  };

  private create = async (req: Request, res: Response, next: NextFunction) => {
    const areaData: Prisma.AreaCreateInput = {
      name: req.body.area,
      country: req.body.country,
      rockMaterial: req.body.rockMaterial,
      minGrade: req.body.minGrade,
      maxGrade: req.body.maxGrade,
    };
    const createdArea = await prisma.area.create({ data: areaData });
    res.status(201).json({ area: createdArea });
  };

  private update = async (
    req: Request<{ area: string; country: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
        name: req.params.area,
        country: req.params.country,
      };
      const areaData: Prisma.AreaCreateInput = {
        name: req.body.area,
        country: req.body.country,
        rockMaterial: req.body.rockMaterial,
        minGrade: req.body.minGrade,
        maxGrade: req.body.maxGrade,
      };
      const updatedArea = await prisma.area.update({
        data: areaData,
        where: { name_country: areaId },
      });
      res.status(200).json({ area: updatedArea });
    } catch (error) {
      next(error);
    }
  };

  private delete = async (
    req: Request<{ area: string; country: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const areaId: Prisma.AreaNameCountryCompoundUniqueInput = {
        name: req.params.area,
        country: req.params.country,
      };
      const deletedArea = await prisma.area.delete({
        where: { name_country: areaId },
      });
      res.status(200).json({ area: deletedArea });
    } catch (error) {
      next(error);
    }
  };
}

export default AreaController;
