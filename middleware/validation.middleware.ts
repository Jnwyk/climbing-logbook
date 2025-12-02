import { Request, Response, NextFunction } from "express";
import createRoute from "../controllers/route/route.validate";

function validationMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = createRoute.parse(req.body);
    req.body = parsed;
    next();
  } catch (error) {
    next(error);
  }
}

export default validationMiddleware;
