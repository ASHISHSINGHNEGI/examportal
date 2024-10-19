import { Router } from "express";
import { registerCentre, getCentreDetails } from "../controllers/centre.controller.js";
import { getExamSupritendentDetails, registerExamSuperintendent } from "../controllers/examSuprintendent.controller.js";
import { registerExamCentre } from "../controllers/examCentre.controller.js";

const router = Router();
router.route("/centre").post(registerCentre);
router.route("/centre").get(getCentreDetails);
router.route("/examSuperintendent").post(registerExamSuperintendent);
router.route("/examSuperintendent").get(getExamSupritendentDetails);
router.route("/examCentre").post(registerExamCentre);

export default router;
