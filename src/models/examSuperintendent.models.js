import { model, Schema } from "mongoose";
const examSuperintendentSchema = new Schema({
  examSuperintendentCode: { type: String, required: true, unique: true },
  examSuperintendentName: { type: String, required: true },
  examSuperintendentEmail: { type: String, required: true },
  examSuperintendentMobile: { type: String, required: true },
  examSuperintendentSex: { type: String, required: true },
  examSuperintendentEducation: { type: String, required: true },
  examSuperintendentAddress: { type: String, required: true },
  examSuperintendentExperience: { type: String, required: true },
  examSuperintendentJobType: { type: String, required: true },
});
  
export const ExamSuperintendent = model(
  "ExamSuperintendent",
  examSuperintendentSchema
);
