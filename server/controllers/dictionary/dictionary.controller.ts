import { NextFunction, Request, Response, Router } from "express";
import authMiddleware from "../../middleware/authentication.middleware";
import Controller from "../../utils/interfaces/controller.interface";
import DictionaryService from "./dictionary.service";

class DictionaryController implements Controller {
  public path = "/dictionary";
  public router = Router();
  private dictionaryService: DictionaryService;

  constructor(dictionaryService: DictionaryService) {
    this.initialiseCragRoutes();
    this.dictionaryService = dictionaryService;
  }

  private initialiseCragRoutes() {
    this.router.get(`${this.path}/style`, authMiddleware, this.getStyles);
    this.router.get(`${this.path}/format`, authMiddleware, this.getFormats);
    this.router.get(`${this.path}/grade`, authMiddleware, this.getGrades);
  }

  private getStyles = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const styles = await this.dictionaryService.getStyles();
      return res.status(200).json({ styles: styles });
    } catch (err) {
      next(err);
    }
  };

  private getFormats = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const formats = await this.dictionaryService.getFormats();
      return res.status(200).json({ formats: formats });
    } catch (err) {
      next(err);
    }
  };

  private getGrades = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const grades = await this.dictionaryService.getGrades();
      return res.status(200).json({ grades: grades });
    } catch (err) {
      next(err);
    }
  };
}

export default DictionaryController;
