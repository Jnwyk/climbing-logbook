import { Request, Response, NextFunction } from "express";
import z, { ZodError } from "zod";
import { formatZodError } from "../../utils/formatZodError";

export function zodErrorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof ZodError) {
    const status = 400;
    return res.status(status).json({
      status: status,
      error: formatZodError(error),
    });
  } else {
    next(error);
  }
}
