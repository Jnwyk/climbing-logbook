// errors/prisma/PrismaError.ts
import { Prisma } from "@prisma/client";

export function getPrismaErrorMessage(
  err: Prisma.PrismaClientKnownRequestError,
) {
  console.log("ERROR: ", err);
  switch (err.code) {
    // ---- Constraint violations ----
    case "P2002":
      const fields = (err.meta?.target as string[])?.join(", ");
      return { status: 409, message: `Unique constraint failed on: ${fields}` };
    case "P2003":
      return {
        status: 409,
        message: `Foreign key constraint failed on: ${err.meta?.field_name}`,
      };
    case "P2004":
      return { status: 409, message: "Database constraint violated" };
    // ---- Not found ----
    case "P2001":
      return { status: 404, message: "Record not found" };
    case "P2015":
      return { status: 404, message: "Related record not found" };
    case "P2018":
      return { status: 404, message: "Required connected records not found" };
    case "P2025":
      return { status: 404, message: `Record not found` };
    // ---- Bad input ----
    case "P2000":
      return {
        status: 400,
        message: `Value too long for column: ${err.meta?.column_name}`,
      };
    case "P2005":
      return {
        status: 400,
        message: `Invalid value for field: ${err.meta?.field_name}`,
      };
    case "P2006":
      return {
        status: 400,
        message: `Invalid value for field: ${err.meta?.field_name}`,
      };
    case "P2007":
      return { status: 400, message: "Data validation error" };
    case "P2011":
      return {
        status: 400,
        message: `Null constraint violated on: ${err.meta?.constraint}`,
      };
    case "P2012":
      return {
        status: 400,
        message: `Missing required value: ${err.meta?.path}`,
      };
    // ---- Timeout / connectivity ----
    case "P2024":
      return { status: 503, message: "Connection pool timed out" };
    case "P2028":
      return { status: 503, message: "Transaction timed out" };
    default:
      return { status: 500, message: `Database error: ${err.code}` };
  }
}
