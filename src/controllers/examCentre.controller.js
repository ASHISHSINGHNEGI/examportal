import asyncHandler from "../utils/asyncHandler.js";
import { ExamCentre } from "../models/examcentre.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
const registerExamCentre = asyncHandler(async (req, res) => {
  const { escdCode, esCode, centreCode, examCycle, examDate } = req.body;
  const newExamCentre = new ExamCentre({
    escdCode,
    esCode,
    centreCode,
    examCycle,
    examDate,
  });
  // create new entry and save it to the database
  const examCentre = await ExamCentre.create(newExamCentre);
  const examCentreCreated = await ExamCentre.findById(examCentre._id);
  if (!examCentreCreated) {
    throw new ApiError(500, "Server Error, please try again later");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, examCentreCreated, "Success"));
});

export { registerExamCentre };
