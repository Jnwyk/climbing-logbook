import z from "zod";

const createArea = z.object({
  area: z.string().nonempty(),
  country: z.string().nonempty(),
  rockMaterial: z.string().max(30),
  minAreaGrade: z.string().max(5).optional(),
  maxAreaGrade: z.string().max(5).optional(),
});

export default createArea;
