import * as z from "zod";

const createRoute = z.object({
  name: z.string(),
  grade: z.string(),
  climbingStyle: z.string(),
  cragName: z.string(),
  minGrade: z.string(),
  maxGrade: z.string(),
  areaName: z.string(),
  country: z.string(),
  rockMaterial: z.string(),
});

export default createRoute;
