import asyncHandler from "../utils/asyncHandler.js";
import { ExamCentre } from "../models/examcentre.model.js";
const registerExamCentre = asyncHandler(async (req, res) => {
  const { escdCode, esCode, centreCode, examCycle, examDate } = req.body;
  const newExamCentre = new ExamCentre({
    escdCode,
    esCode,
    centreCode,
    examCycle,
    examDate,
  });

  res.status(200).json({
    ...newExamCentre,
  });
});

export { registerExamCentre };
