import mongoose, { model, Schema } from "mongoose";
const centreSchema = new mongoose.Schema({
  centreCode: { type: String, required: true, unique: true },
  centreName: { type: String, required: true },
  centreCity: { type: String, required: true },
  centerState: { type: String, required: true },
});

export const Centre = model("Centre", centreSchema);
