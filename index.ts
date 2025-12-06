import App from "./app";
import "dotenv/config";
import RouteController from "./controllers/route/route.controller";
import AreaController from "./controllers/area/area.controller";

const port = Number(process.env.PORT);

const app = new App(port, [new RouteController(), new AreaController()]);

app.listen();
