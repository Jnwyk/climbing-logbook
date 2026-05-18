import prisma from "../../prismaClient";
import bcrypt from "bcrypt";
import generateToken from "../../utils/generateToken";
import verifyPassword from "../../utils/verifyPassword";
import HttpError from "../../utils/errors/HttpError";
import {
  LoginUserModel,
  RegisterUserModel,
  SafeUser,
} from "../../types/user.types";

class UserService {
  public registerUser = async (
    body: RegisterUserModel,
  ): Promise<[SafeUser, string]> => {
    const userExists = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (userExists) {
      throw new HttpError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const createdUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
        role: body.role,
      },
    });
    const { password, ...safeUser } = createdUser;
    const token = generateToken(safeUser);
    return [safeUser, token];
  };

  public loginUser = async (
    body: LoginUserModel,
  ): Promise<[SafeUser, string]> => {
    const foundUser = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!foundUser) throw new HttpError(401, "Invalid credentials");
    const isPasswordValid = await verifyPassword(
      foundUser.password,
      body.password,
    );
    if (!isPasswordValid) throw new HttpError(401, "Invalid credentials");
    const { password, ...safeUser } = foundUser;
    const token = generateToken(safeUser);
    return [safeUser, token];
  };
}

export default UserService;
