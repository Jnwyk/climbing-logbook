import App from "./app";
import "dotenv/config";
import RouteController from "./controllers/route/route.controller";

const port = Number(process.env.PORT);

const app = new App(port, [new RouteController()]);

app.listen();
