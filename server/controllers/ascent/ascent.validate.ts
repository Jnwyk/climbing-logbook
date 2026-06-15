import z from "zod";

export const createAscent = z.object({
  routeId: z.string().nonempty(),
  userId: z.string().nonempty(),
  ascentDate: z.coerce.date(),
  styleId: z.string().nonempty(),
  formatId: z.string().nonempty(),
  myGradeId: z.string().nonempty(),
  stars: z.int().gt(0).lt(6),
  visibility: z.literal("PUBLIC", "PRIVATE"),
  personalOpinion: z.string().optional(),
});

export const updateVisibilityAscent = z.object({
  visibility: z.literal(["PUBLIC", "PRIVATE"]),
});
