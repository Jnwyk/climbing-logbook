import z from "zod";

const createAscent = z.object({
  ascentStyle: z.string().nonempty(),
  personalOpinion: z.string().nonempty(),
  routeId: z.string().nonempty(),
  userId: z.string().nonempty(),
});

export default createAscent;
