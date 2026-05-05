import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import verifyPassword from "../utils/verifyPassword";
import generateToken from "../utils/generateToken";

describe("verifyPassword", () => {
  it("returns true for correct password", async () => {
    const password = "testPassword123";
    const hash = await bcrypt.hash(password, 10);
    const result = await verifyPassword(hash, password);

    expect(result).toBe(true);
  });

  it("returns false for wrong password", async () => {
    const password = "testPassword123";
    const hash = await bcrypt.hash(password, 10);
    const result = await verifyPassword(hash, "anotherPassword123");

    expect(result).toBe(false);
  });
});

describe("generateToken", () => {
  const SECRET = "test-jwt-secret";

  beforeAll(() => {
    process.env.JWT_SECRET = SECRET;
  });

  it("generates a token correctly", () => {
    const currentDate = new Date();
    const user = {
      id: "testUserId",
      CreatedOn: currentDate,
      UpdatedOn: currentDate,
      username: "HelloKitty",
      email: "hello_kitty@gmail.com",
      role: Role.ADMIN,
    };
    const token = generateToken(user);
    const decoded = jwt.verify(token, SECRET) as any;
    expect(decoded.id).toBe("testUserId");
  });
});
