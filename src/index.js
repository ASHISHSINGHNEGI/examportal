import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
// Load environment variables
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", () => {
      console.log("Error on connection establishment", error);
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log("server is running on port :", port);
    });
    app.post("/api/register", (req, res) => {
      // console.log("registered");
      const { username, email, password, cpassword } = req.body;
      console.log(username, email, password, cpassword);
      res.send({ message: "sucess " });
    });
  })
  .catch((error) => {
    console.error("mongodb connection failed:", error);
  });
