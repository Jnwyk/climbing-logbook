import * as z from "zod";

const createRoute = z.object({
  name: z.string().nonempty(),
  cragName: z.string().nonempty(),
  areaName: z.string().nonempty(),
  country: z.string().nonempty(),
  grade: z.string().nonempty(),
  climbingStyle: z.string().nonempty(),
  length: z.int().optional(),
  year: z.date().optional(),
  firstAscent: z.string().optional(),
  boltNumber: z.int().optional(),
  additionalInfo: z.string().optional(),
});

export default createRoute;
