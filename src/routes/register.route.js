import { Router } from "express";
import { registerCentre } from "../controllers/centre.controller.js";
import { registerExamSupritendent } from "../controllers/examSupritendent.controller.js";
import { registerExamCentre } from "../controllers/examCentre.controller.js";

const router = Router();
router.route("/centre").post(registerCentre);
router.route("/examSupritendent").post(registerExamSupritendent);
router.route("/examCentre").post(registerExamCentre);

export default router;
