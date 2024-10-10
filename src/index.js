import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
// Load environment variables
dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", () => {
      console.log("Error on connection establishment", error);
    });

    app.listen(port, () => {
      console.log("server is running on port :", port);
    });
   
  })
  .catch((error) => {
    console.error("mongodb connection failed:", error);
  });
