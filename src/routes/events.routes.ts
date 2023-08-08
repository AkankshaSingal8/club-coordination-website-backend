import { Express, Router } from "express";
import * as events from "../controllers/events.controller";

const router = Router();

router.post("/", events.create);

router.get("/", events.findAll);

export default (app: Express) => {
  app.use('/studentcoordinator', router);
};
