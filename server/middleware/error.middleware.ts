import { Request, Response, NextFunction } from "express";
import HttpError from "../utils/errors/HttpError";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (error instanceof HttpError) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).send({ status, message });
  } else if (error instanceof ZodError) {
    const status = 400;
    const message = error.message || "Validation error";
    res.status(status).send({ status, message });
  } else if ((error as any)?.cause?.code) {
    switch ((error as any)?.cause?.code) {
      case "23001":
        const status = 409;
        const message = "Cannot remove a record due to existing foreign key";
        const detail = (error as any)?.cause?.detail;
        res.status(status).send({ status, message, detail });
        return;
    }
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      const status = 404;
      const message = "Record not found";
      res.status(status).send({ status, message });
    } else if (error.code === "P2002") {
      const status = 409;
      const message = "Record already exists";
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
