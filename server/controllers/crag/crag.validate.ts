import z from "zod";

const createCrag = z.object({
  crag: z.string().nonempty(),
  area: z.string().nonempty(),
  country: z.string().nonempty(),
});

export default createCrag;
