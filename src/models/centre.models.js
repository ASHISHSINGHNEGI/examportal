import { model, Schema } from "mongoose";
const centreSchema = new Schema({
  centreCode: { type: String, required: true, unique: true },
  centreName: { type: String, required: true },
  centreCity: { type: String, required: true },
  centreState: { type: String, required: true },
  centreCountry: { type: String, required: true },
});

 const Centre = model("Centre", centreSchema);
export {
  Centre
}