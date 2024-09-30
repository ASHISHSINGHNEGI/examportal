import { model, Schema } from "mongoose";
const examCentreSchema = new Schema({
  escdCode: { type: String, required: true, unique: true },
  esCode: { type: String, required: true },
  centreCode: { type: String, required: true },
  examCycle: { type: String, required: true },
  examDate: { type: Date, required: true },
});

export const ExamCentre = model("ExamCentre", examCentreSchema);
    