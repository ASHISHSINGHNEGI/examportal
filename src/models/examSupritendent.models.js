import mongoose, { model, Schema } from "mongoose";
const examSupritendentSchema = new mongoose.Schema({
  examSupritendentCode: { type: String, required: true, unique: true },
  salutaiton: { type: String, required: true },
  esName: { type: String, required: true },
  esSex: { type: String, required: true },
  esQualification: { type: String, required: true },
  esAddress: { type: String, required: true },
  mobile: { type: String, required: true },
  experience: { type: String, required: true },
  email: { type: String, required: true },
  jobType: { type: String, required: true },
  
});

export const ExamSupritendent = model("ExamSupritendent", examSupritendentSchema);
