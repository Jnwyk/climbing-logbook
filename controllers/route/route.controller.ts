import { Request, Response, NextFunction, Router } from "express";
import Controller from "../../utils/interfaces/controller.interface";
import prisma from "../../prismaClient";
import HttpError from "../../utils/errors/HttpError";

class RouteController implements Controller {
  public path = "/route";
  public router = Router();

  constructor() {
    this.initialiseRouteRoutes();
  }

  private initialiseRouteRoutes(): void {
    this.router.get(`${this.path}/:id`, this.getOne);
    // this.router.get("/", this.getAll);
    // this.router.post("/", this.create);
    // this.router.put("/:id", this.update);
    // this.router.delete("/:id", this.delete);
  }

  private getOne = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    console.log("Testing");
    const route = await prisma.route.findUnique({
      where: { id: req.params.id },
    });
    if (!route) {
      return next(new HttpError(404, "Route Not Found"));
    }
    console.log("test");
    res.status(200).json({ route: req.body });
  };
}

export default RouteController;
