import App from "./app";
import "dotenv/config";
import RouteController from "./controllers/route/route.controller";
import AreaController from "./controllers/area/area.controller";
import CragController from "./controllers/crag/crag.controller";
import UserController from "./controllers/user/user.controller";
import AscentController from "./controllers/ascent/ascent.controller";

const port = Number(process.env.PORT);

const app = new App(port, [
  new RouteController(),
  new AreaController(),
  new CragController(),
  new UserController(),
  new AscentController(),
]);

app.listen();
