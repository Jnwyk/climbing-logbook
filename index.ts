import App from "./app";
import "dotenv/config";
import RouteController from "./controllers/route/route.controller";
import AreaController from "./controllers/area/area.controller";
import CragController from "./controllers/crag/crag.controller";

const port = Number(process.env.PORT);

const app = new App(port, [
  new RouteController(),
  new AreaController(),
  new CragController(),
]);

app.listen();
