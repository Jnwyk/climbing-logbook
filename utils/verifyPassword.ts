import bcrypt from "bcrypt";

export default async function verifyPassword(
  hashedPassword: string,
  password: string,
) {
  return await bcrypt.compare(password, hashedPassword);
}
