import * as z from "zod";

const createRoute = z.object({
  name: z.string().nonempty(),
});

export default createRoute;
