import jwt from "jsonwebtoken";
import { SafeUser } from "../types/user.types";

export default function generateToken(user: SafeUser) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: "7d",
  });
}
