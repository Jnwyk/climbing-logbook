import { Request, Response, NextFunction } from "express";
import HttpError from "../utils/errors/HttpError";

function errorMiddleware(
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  res.status(status).send({ status, message });
}

export default errorMiddleware;
