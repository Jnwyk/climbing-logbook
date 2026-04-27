import { Request, Response, NextFunction } from "express";
import HttpError from "../../utils/errors/HttpError";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { zodErrorMiddleware } from "./zodError.middleware";
import { prismaErrorMiddleware } from "./pismaError.middleware";

function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  zodErrorMiddleware(error, req, res, next);
  prismaErrorMiddleware(error, req, res, next);

  if (error instanceof HttpError) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({ status, error: message });
  } else {
    const status = 500;
    const message = "Unknown error";
    res.status(status).send({ status, error: message });
  }

  // CODE MAY BE NECESSARY
  // if ((error as any)?.cause?.code) {
  //   switch ((error as any)?.cause?.code) {
  //     case "23001":
  //       const status = 409;
  //       const message = "Cannot remove a record due to existing foreign key";
  //       const detail = (error as any)?.cause?.detail;
  //       res.status(status).send({ status, message, detail });
  //       return;
  //   }
  // }
}

export default errorMiddleware;
