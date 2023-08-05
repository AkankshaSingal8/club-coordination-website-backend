import { Express, Router } from "express";
import * as clubs from "../controllers/clubs.controller";

const router = Router();

router.post("/", clubs.create);

router.get("/", clubs.findAll);

export default (app: Express) => {
  app.use('/clubs', router);
};
