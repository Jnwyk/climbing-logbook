import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { getPrismaErrorMessage } from "../../prisma/PrismaError";

export function prismaErrorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const { status, message } = getPrismaErrorMessage(error);
    return res
      .status(status)
      .json({ code: error.code, status: status, error: message });
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      status: 400,
      error: "Invalid query",
    });
  }
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return res.status(503).json({
      status: 503,
      error: "Database is unavailable",
    });
  }
  next(error);
}
