import { Request, Response, NextFunction } from "express";
import HttpError from "../utils/errors/HttpError";
import { ZodError } from "zod";
import { Prisma } from "../generated";

function errorMiddleware(
  error: HttpError | ZodError | Prisma.PrismaClientKnownRequestError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error instanceof HttpError) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({ status, message });
  } else if (error instanceof ZodError) {
    const status = 400;
    const message = error.message || "Validation error";
    res.status(status).send({ status, message });
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      const status = 404;
      const message = "Record not found";
      res.status(status).send({ status, message });
    } else {
      const status = 500;
      const message = "Unknown error";
      res.status(status).send({ status, message });
    }
  } else {
    const status = 500;
    const message = "Unknown error";
    res.status(status).send({ status, message });
  }
}

export default errorMiddleware;
