import * as z from "zod";

const createRoute = z.object({
  name: z.string().nonempty(),
  grade: z.string(),
  climbingStyle: z.string(),
  cragName: z.string().nonempty(),
  minCragGrade: z.string().max(5).optional(),
  maxCragGrade: z.string().max(5).optional(),
  minAreaGrade: z.string().max(5).optional(),
  maxAreaGrade: z.string().max(5).optional(),
  areaName: z.string().nonempty(),
  country: z.string().nonempty(),
  rockMaterial: z.string().max(30).optional(),
});

export default createRoute;
