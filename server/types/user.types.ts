import { User } from "@prisma/client";

export type SafeUser = Omit<User, "password">;

export interface RegisterUserModel {
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
}

export interface LoginUserModel {
  email: string;
  password: string;
}
