import { Express, Router } from "express";
import * as clubs from "../controllers/clubs.controller";

const router = Router();

router.post("/", clubs.create);

export default (app: Express) => {
  app.use('/api/clubs', router);
};
