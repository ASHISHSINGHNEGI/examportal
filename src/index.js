import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
import { Centre } from "./models/centre.models.js";
import { ExamCentre } from "./models/examcentre.model.js";
import { ExamSupritendent } from "./models/examSupritendent.models.js";
// Load environment variables
dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", () => {
      console.log("Error on connection establishment", error);
    });

    app.listen(port, () => {
      console.log("server is running on port :", port);
    });

    app.post("/api/register/centre", async (req, res) => {
      const { centreCode, centreName, centreCity, centerState, centerCountry } =
        req.body;
      console.log(req.body);
      const newCentre = new Centre({
        centreCode,
        centreName,
        centreCity,
        centerState,
        centerCountry,
      });
      const result = await newCentre.save();

      res.send({ message: `data received ${result}` });
    });
    app.post("/api/register/examCentre", async (req, res) => {
      const { escdCode, esCode, centreCode, examCycle, examDate } = req.body;
      console.log(req.body);
      const newExamCentre = new ExamCentre({
        escdCode,
        esCode,
        centreCode,
        examCycle,
        examDate,
      });
      const result = await newExamCentre.save();

      res.send({ message: `data received ${result}` });
    });
    app.post("/api/register/examSupritendent", async (req, res) => {
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
      console.log(req.body);
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
      const result = await newExamSupritendent.save();

      res.send({ message: `data received ${result}` });
    });
  })
  .catch((error) => {
    console.error("mongodb connection failed:", error);
  });
