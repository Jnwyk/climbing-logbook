import z from "zod";

const createArea = z.object({
  area: z.string().nonempty(),
  country: z.string().nonempty(),
  rockMaterial: z.string().max(30),
  minGrade: z.string().max(5),
  maxGrade: z.string().max(5),
});

export default createArea;
