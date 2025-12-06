import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodType } from "zod";

function validationMiddleware(schema: ZodType): RequestHandler {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const parsed = schema.parse(req.body);
      req.body = parsed;
      next();
    } catch (error) {
      next(error);
    }
  };
}

export default validationMiddleware;
