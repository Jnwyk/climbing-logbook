import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

interface Token extends Request {
  token: string | JwtPayload;
}

export default Token;
