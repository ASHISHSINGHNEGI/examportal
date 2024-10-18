import { Router } from "express";
import { registerCentre } from "../controllers/centre.controller.js";
import { registerExamSuperintendent } from "../controllers/examSuprintendent.controller.js";
import { registerExamCentre } from "../controllers/examCentre.controller.js";

const router = Router();
router.route("/centre").post(registerCentre);
router.route("/examSuperintendent").post(registerExamSuperintendent);
router.route("/examCentre").post(registerExamCentre);

export default router;
