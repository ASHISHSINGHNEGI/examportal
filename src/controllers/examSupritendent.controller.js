import asyncHandler from "../utils/asyncHandler.js    ";
import { ExamSupritendent } from "../models/examSupritendent.models.js";
import { ApiError } from "../utils/ApiError.js";

const registerExamSupritendent = asyncHandler(async (req, res) => {
  const {
    examSupritendentCode,
    salutaiton,
    esName,
    esSex,
    esEducation,
    esAddress,
    mobile,
    esExperience,
    email,
    seJobType,
  } = req.body;
  const newExamSupritendent = new ExamSupritendent({
    examSupritendentCode,
    salutaiton,
    esName,
    esSex,
    esEducation,
    esAddress,
    mobile,
    esExperience,
    email,
    seJobType,
  });

  // create new entry and save it to the database
  const examSupritendent = await ExamSupritendent.create(newExamSupritendent);
  const createdExamSupritendent = await examSupritendent.findById(
    examSupritendent._id
  );

  if (!createdExamSupritendent) {
    throw new ApiError(500, "Server Error, please try again later");
  }
 return res.status(201).json(new ApiResponse(200, createdExamSupritendent, "Success"));
});

export { registerExamSupritendent };
