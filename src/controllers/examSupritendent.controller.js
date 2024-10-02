import asyncHandler from "../utils/asyncHandler.js    ";
import { ExamSupritendent } from "../models/examSupritendent.models.js";

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

  res.status(200).json({
    ...newExamSupritendent,
  });
});

export { registerExamSupritendent };
