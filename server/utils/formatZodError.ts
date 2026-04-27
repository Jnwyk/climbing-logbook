import { z, ZodError } from "zod";

export function formatZodError(error: ZodError) {
  const errorArray: string[] = [];
  const errorKeyArray: string[] = Object.keys(
    z.flattenError(error).fieldErrors,
  );
  const errorValueArray: string[] = Object.values(
    z.flattenError(error).fieldErrors,
  );
  errorKeyArray.forEach((key, index) => {
    errorArray.push(`Field "${key}" error: ` + errorValueArray[index]);
  });
  return errorArray;
}
