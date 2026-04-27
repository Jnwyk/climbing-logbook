import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import validationMiddleware from "../../middleware/validation.middleware";
import createArea from "./area.validate";
import authMiddleware from "../../middleware/authentication.middleware";
import AreaService from "./area.service";

class AreaController implements Controller {
  public path = "/area";
  public router = Router();
  public service = new AreaService();

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
      `${this.path}/:country/:area`,
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
    const areas = await this.service.getAllAreas();
    res.status(200).json({ areas: areas });
  };

  private create = async (req: Request, res: Response, next: NextFunction) => {
    const createdArea = await this.service.createArea({ ...req.body });
    res.status(201).json({ area: createdArea });
  };

  private update = async (
    req: Request<{ area: string; country: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const updatedArea = await this.service.updateArea(
        { ...req.params },
        { ...req.body },
      );
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
      const deletedArea = await this.service.deleteArea({ ...req.params });
      res.status(200).json({ area: deletedArea });
    } catch (error) {
      next(error);
    }
  };
}

export default AreaController;
