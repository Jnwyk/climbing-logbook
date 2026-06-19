import App from "./app";
import "dotenv/config";
import RouteController from "./controllers/route/route.controller";
import AreaController from "./controllers/area/area.controller";
import CragController from "./controllers/crag/crag.controller";
import UserController from "./controllers/user/user.controller";
import AscentController from "./controllers/ascent/ascent.controller";
import AscentService from "./controllers/ascent/ascent.service";
import DictionaryController from "./controllers/dictionary/dictionary.controller";
import DictionaryService from "./controllers/dictionary/dictionary.service";

const port = Number(process.env.PORT);

const app = new App(port, [
  new RouteController(),
  new AreaController(),
  new CragController(),
  new UserController(),
  new DictionaryController(new DictionaryService()),
  new AscentController(new AscentService()),
]);

app.listen();
