import z from "zod";

const createCrag = z.object({
  crag: z.string().nonempty(),
  area: z.string().nonempty(),
  country: z.string().nonempty(),
  minCragGrade: z.string().max(5).optional(),
  maxCragGrade: z.string().max(5).optional(),
});

export default createCrag;
