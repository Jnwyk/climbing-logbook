import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import validationMiddleware from "../../middleware/validation.middleware";
import createCrag from "./crag.validate";
import createArea from "../area/area.validate";
import authMiddleware from "../../middleware/authentication.middleware";
import CragService from "./crag.service";

class CragController implements Controller {
  public path = "/crag";
  public router = Router();
  private service = new CragService();

  constructor() {
    this.initialiseCragRoutes();
  }

  private initialiseCragRoutes() {
    // this.router.use(this.path, authMiddleware);
    this.router.get(this.path, this.getAll);
    this.router.post(
      this.path,
      validationMiddleware([createCrag]),
      this.create,
    );
    this.router.put(
      `${this.path}/:country/:area/:crag`,
      validationMiddleware([createCrag]),
      this.update,
    );
    this.router.delete(`${this.path}/:country/:area/:crag`, this.delete);
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const crags = await this.service.getAllCrags();
    res.status(200).json({ crags: crags });
  };

  private create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdCrag = await this.service.createCrag({ ...req.body });
      res.status(201).json({ crag: createdCrag });
    } catch (error) {
      next();
    }
  };

  private update = async (
    req: Request<{ crag: string; area: string; country: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const updatedArea = await this.service.updateCrag(
        { ...req.params },
        { ...req.body },
      );
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
      const deletedCrag = await this.service.deleteCrag({ ...req.params });
      res.status(200).json({ crag: deletedCrag });
    } catch (error) {
      next(error);
    }
  };
}

export default CragController;
