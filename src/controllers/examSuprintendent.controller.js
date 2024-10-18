import asyncHandler from "../utils/asyncHandler.js    ";
import { ExamSuperintendent } from "../models/examSuperintendent.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerExamSuperintendent = asyncHandler(async (req, res) => {
  const {
    examSuperintendentCode,
    examSuperintendentName,
    examSuperintendentEmail,
    examSuperintendentMobile,
    examSuperintendentSex,
    examSuperintendentEducation,
    examSuperintendentAddress,
    examSuperintendentExperience,
    examSuperintendentJobType,
  } = req.body;


  const duplicateData = await ExamSuperintendent.findOne({ examSuperintendentCode: req.body.examSuperintendentCode });
  if (duplicateData) {
    return res.status(406).json(new ApiRespons(406, req.body, `${examSuperintendentCode} is already present in the database`));
  }
  else {
    const newExamSuperintendent = new ExamSuperintendent({
      examSuperintendentCode,
      examSuperintendentName,
      examSuperintendentEmail,
      examSuperintendentMobile,
      examSuperintendentSex,
      examSuperintendentEducation,
      examSuperintendentAddress,
      examSuperintendentExperience,
      examSuperintendentJobType,
    });
    // create new entry and save it to the database
    const examSuperintendent = await ExamSuperintendent.create(newExamSuperintendent);

    if (!examSuperintendent._id) {
      throw new ApiError(500, "Server Error, please try again later");
    }
    else {
      console.log("new centre record is stored with ID: ", examSuperintendent._id);
      return res.status(201).json(new ApiResponse(200, examSuperintendent, "Success"));
    }
  }
});

export { registerExamSuperintendent };
