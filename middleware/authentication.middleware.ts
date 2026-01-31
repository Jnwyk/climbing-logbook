import jwt from "jsonwebtoken";
import { Prisma } from "../generated";
import { Request, Response, NextFunction } from "express";
import HttpError from "../utils/errors/HttpError";
import Token from "../utils/interfaces/token.interface";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split("Bearer ")[1]?.trim();
  if (!token) {
    return next(new HttpError(401, "Unauthorized"));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);
    (req as Token).token = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
