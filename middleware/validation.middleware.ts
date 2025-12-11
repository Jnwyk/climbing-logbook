import { Request, Response, NextFunction, RequestHandler } from "express";
import { z, ZodType } from "zod";

function validationMiddleware(schemas: ZodType<any>[]): RequestHandler {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      let merged = {};
      schemas.forEach((schema) => {
        const parsed = schema.parse(req.body);
        merged = { ...merged, ...parsed };
      });
      req.body = merged;
      next();
    } catch (error) {
      next(error);
    }
  };
}

export default validationMiddleware;
