import Navbar from "./Components/Navbar";
import Centreform from "./Components/Centre.form";
import img1 from "./assets/college-entrance-exam-concept-illustration_114360-13742.jpg";
import ESform from "./Components/ES.form";
import ESExamCentreform from "./Components/ES.Exam.Centre.form";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container d-flex">
        <div className=" w-50">
          <Routes>
            <Route path="/" element={<Centreform />} />
            <Route path="/examsuperintendent" element={<ESform />} />
            <Route path="/esexamcentre" element={<ESExamCentreform />} />
          </Routes>
        </div>
        <div className="w-50">
          <img src={img1} alt="Exam Illustration" className="img-fluid" />
        </div>
      </div>
    </>
  );
}
