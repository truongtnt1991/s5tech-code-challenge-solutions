import { Router } from "express";
import { ResourceController } from "../controllers/resource.controller";

const router = Router();
const controller = new ResourceController();

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.detail);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
