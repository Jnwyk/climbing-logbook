import { Request, Response, NextFunction, Router } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import prisma from "../../prismaClient";
import HttpError from "../../utils/errors/HttpError";
import validationMiddleware from "../../middleware/validation.middleware";
import createRoute from "./route.validate";
import authMiddleware from "../../middleware/authentication.middleware";
import RouteService from "./route.service";

class RouteController implements Controller {
  public path = "/route";
  public router = Router();
  private service = new RouteService();

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
    const route = await this.service.getRoute({ id: req.params.id });
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
    const routes = await this.service.getAllRoutes();
    res.status(200).json({ routes: routes });
  };

  private create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const createdRoute = await this.service.createRoute({ ...req.body });
      res.status(201).json({ route: createdRoute });
    } catch (error) {
      return next(error);
    }
  };

  private update = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const updatedRoute = await this.service.updateRoute(
        { ...req.params },
        { ...req.body },
      );
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
