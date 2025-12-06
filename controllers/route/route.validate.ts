import * as z from "zod";

const createRoute = z.object({
  name: z.string().nonempty(),
  grade: z.string(),
  climbingStyle: z.string(),
  cragName: z.string().nonempty(),
  minCragGrade: z.string().max(5),
  maxCragGrade: z.string().max(5),
  minAreaGrade: z.string().max(5),
  maxAreaGrade: z.string().max(5),
  areaName: z.string().nonempty(),
  country: z.string().nonempty(),
  rockMaterial: z.string().max(30),
});

export default createRoute;
