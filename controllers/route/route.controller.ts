import { Request, Response, NextFunction, Router } from "express";
import { Prisma } from "@prisma/client";
import Controller from "../../utils/interfaces/controller.interface";
import prisma from "../../prismaClient";
import HttpError from "../../utils/errors/HttpError";
import validationMiddleware from "../../middleware/validation.middleware";
import createRoute from "./route.validate";
import authMiddleware from "../../middleware/authentication.middleware";

class RouteController implements Controller {
  public path = "/route";
  public router = Router();

  constructor() {
    this.initialiseRouteRoutes();
  }

  private initialiseRouteRoutes(): void {
    this.router.use(this.path, authMiddleware);
    this.router.get(`${this.path}/:id`, this.getOne);
    this.router.get(`${this.path}`, this.getAll);
    this.router.post(
      `${this.path}`,
      validationMiddleware([createRoute]),
      this.create,
    );
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware([createRoute]),
      this.update,
    );
    this.router.delete(`${this.path}/:id`, this.delete);
  }

  private getOne = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const route = await prisma.route.findUnique({
      where: { id: req.params.id },
    });
    if (!route) {
      return next(new HttpError(404, "Record Not Found"));
    }
    res.status(200).json({ route: route });
  };

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const routes = await prisma.route.findMany();
    res.status(200).json({ routes: routes });
  };

  private create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const crag: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
      name: req.body.cragName,
      areaName: req.body.areaName,
      country: req.body.country,
    };

    const area: Prisma.AreaNameCountryCompoundUniqueInput = {
      name: req.body.areaName,
      country: req.body.country,
    };

    const route: Prisma.RouteCreateInput = {
      name: req.body.name,
      grade: req.body.grade,
      climbingStyle: req.body.climbingStyle,
      crag: {
        connectOrCreate: {
          create: {
            name: req.body.cragName,
            minGrade: req.body.minCragGrade,
            maxGrade: req.body.maxCragGrade,
            area: {
              connectOrCreate: {
                create: {
                  name: req.body.areaName,
                  country: req.body.country,
                  rockMaterial: req.body.rockMaterial,
                  minGrade: req.body.minAreaGrade,
                  maxGrade: req.body.maxAreaGrade,
                },
                where: {
                  name_country: area,
                },
              },
            },
          },
          where: {
            name_areaName_country: crag,
          },
        },
      },
    };

    const createdRoute = await prisma.route.create({ data: route });
    res.status(201).json({ route: createdRoute });
  };

  private update = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const crag: Prisma.CragNameAreaNameCountryCompoundUniqueInput = {
      name: req.body.cragName,
      areaName: req.body.areaName,
      country: req.body.country,
    };
    try {
      const area: Prisma.AreaNameCountryCompoundUniqueInput = {
        name: req.body.areaName,
        country: req.body.country,
      };

      const route: Prisma.RouteUpdateInput = {
        name: req.body.name,
        grade: req.body.grade,
        climbingStyle: req.body.climbingStyle,
        crag: {
          connectOrCreate: {
            create: {
              name: req.body.cragName,
              minGrade: req.body.minCragGrade,
              maxGrade: req.body.maxCragGrade,
              area: {
                connectOrCreate: {
                  create: {
                    name: req.body.areaName,
                    country: req.body.country,
                    rockMaterial: req.body.rockMaterial,
                    minGrade: req.body.minAreaGrade,
                    maxGrade: req.body.maxAreaGrade,
                  },
                  where: {
                    name_country: area,
                  },
                },
              },
            },
            where: {
              name_areaName_country: crag,
            },
          },
        },
      };
      const updatedRoute = await prisma.route.update({
        where: { id: req.params.id },
        data: route,
      });

      res.status(201).json({ route: updatedRoute });
    } catch (error) {
      return next(error);
    }
  };

  private delete = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const route = await prisma.route.delete({
        where: { id: req.params.id },
      });
      res.status(200).json({ route: route });
    } catch (error) {
      return next(error);
    }
  };
}

export default RouteController;
