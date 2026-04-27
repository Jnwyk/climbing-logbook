import z from "zod";

const createArea = z.object({
  name: z.string().nonempty(),
  country: z.string().nonempty(),
  rockMaterial: z.string().max(30).optional(),
});

export default createArea;
