import z from "zod";

const createArea = z.object({
  name: z.string().nonempty(),
  country: z.string().nonempty(),
});

export default createArea;
