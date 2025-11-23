import express, { Application } from "express";
import Controller from "./utils/interfaces/controller.interface";
import errorMiddleware from "./middleware/error.middleware";

class App {
  public app: Application;
  public port: number;

  constructor(port: number, controllers: Controller[]) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.initializeErrors();
  }

  private initializeMiddleware = () => {
    this.app.use(express.json());
    this.app.use(express.urlencoded());
  };

  private initializeControllers = (controllers: Controller[]) => {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  };

  private initializeErrors = () => {
    this.app.use(errorMiddleware);
  };

  public listen = () => {
    this.app.listen(this.port, () => {
      console.log(`App is listening on port ${this.port}`);
    });
  };
}

export default App;
