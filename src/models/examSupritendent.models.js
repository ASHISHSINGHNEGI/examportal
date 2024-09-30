import { model, Schema } from "mongoose";
const examSupritendentSchema = new Schema({
  examSupritendentCode: { type: String, required: true, unique: true },
  salutaiton: { type: String, required: true },
  esName: { type: String, required: true },
  esSex: { type: String, required: true },
  esEducation: { type: String, required: true },
  esAddress: { type: String, required: true },
  mobile: { type: String, required: true },
  esExperience: { type: String, required: true },
  email: { type: String, required: true },
  seJobType: { type: String, required: true },
});

export const ExamSupritendent = model(
  "ExamSupritendent",
  examSupritendentSchema
);
