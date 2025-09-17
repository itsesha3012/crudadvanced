import express from "express";
import itemController from "../controllers/itemController.js";
// import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get( itemController.getAll)
  .post( itemController.createOne);

router.route("/:id")
  .get( itemController.getOne)
  .put(itemController.updateOne)
  .delete(itemController.deleteOne);

export default router;
