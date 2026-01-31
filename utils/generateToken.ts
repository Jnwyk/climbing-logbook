import jwt from "jsonwebtoken";
import { User } from "../generated";

export default function generateToken(user: User) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: "7d",
  });
}
