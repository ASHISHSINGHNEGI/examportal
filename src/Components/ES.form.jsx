import axios from "axios";
import { useCallback, useState } from "react";

export default function ESform() {
  const [examSuperintendentFormData, setExamSuperintendentFormData] = useState({
    examSuperintendentCode: "",
    examSuperintendentName: "",
    examSuperintendentEmail: "",
    examSuperintendentMobile: "",
    examSuperintendentSex: "",
    examSuperintendentEducation: "",
    examSuperintendentAddress: "",
    examSuperintendentExperience: 0,
    examSuperintendentJobType: "",
  });
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    // Check if the input expects a number
    const parsedValue =
      name === "examSuperintendentExperience" ? parseFloat(value) || 0 : value;

    setExamSuperintendentFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  }, []);
  
  const resetForm = useCallback(() => {
    setExamSuperintendentFormData({
      examSuperintendentCode: "",
      examSuperintendentName: "",
      examSuperintendentEmail: "",
      examSuperintendentMobile: "",
      examSuperintendentSex: "",
      examSuperintendentEducation: "",
      examSuperintendentAddress: "",
      examSuperintendentExperience: 0,
      examSuperintendentJobType: "",
    });
  },[]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      // Add your form submission logic here (e.g., API calls)
      console.log(examSuperintendentFormData);
      const uri =
        import.meta.env.VITE_BACKEND_URI +
        ":" +
        import.meta.env.VITE_BACKEND_PORT;
      const completeURI = uri + "/api/register/examSuperintendent";
      console.log(completeURI);
      const isFormValid = Object.values(examSuperintendentFormData).every(
        Boolean
      );
      if (isFormValid) {
        axios
          .post(completeURI, examSuperintendentFormData)
          .then((response) => {
            console.log("response : ", response.data);
            if (response.data.statusCode === 200) {
              alert(`Data Saved Successfully`);
              resetForm();
            }
          })
          .catch((error) => {
            console.error("axios error   ", error);
            console.log(error.response.data.statusCode);

            if (error.response.data.statusCode === 406) {
              alert(`Dulplicate data centreCode already present`);
            }
          });
      }
    },
    [examSuperintendentFormData, resetForm]
  );

  const inputFields = [
    {
      label: "Exam Superintendent Code",
      name: "examSuperintendentCode",
      type: "text",
      placeholder: "eg. es98",
    },

    {
      label: "Exam Superintendent Name",
      name: "examSuperintendentName",
      type: "text",
      placeholder: "eg. Mohit Kumar",
    },
    {
      label: "Exam Superintendent Email",
      name: "examSuperintendentEmail",
      type: "email",
      placeholder: "eg. asb@gmail.com",
    },
    {
      label: "Exam Superintendent Mobile",
      name: "examSuperintendentMobile",
      type: "number",
      placeholder: "eg. 8701234567",
    },

    {
      label: "Exam Superintendent Address",
      name: "examSuperintendentAddress",
      type: "text",
      placeholder:
        "eg. 2nd Floor, Government Polytechnic Building Plot No. 6C, Sector-11, Sidcul Rd, Haridwar, Uttarakhand 249403 ",
    },
  ];
  const selecFields = [
    {
      label: "Exam Superintendent Sex",
      name: "examSuperintendentSex",
      type: "text",
      placeholder: "M/F",
      options: ["M", "F"],
    },
    {
      label: "Exam Superintendent JobType",
      name: "examSuperintendentJobType",
      type: "text",
      options: ["Permanent", "Contractual"],
      placeholder: "Permanent/Contractual",
    },
    {
      label: "Exam Superintendent Highest qualification",
      name: "examSuperintendentEducation",
      type: "text",
      placeholder: "eg. M Tech",
      options: [
        "Bachelor of Arts (B.A.)",
        "Bachelor of Science (B.Sc.)",
        "Bachelor of Commerce (B.Com.)",
        "Bachelor of Technology (B.Tech.) / Bachelor of Engineering (B.E.)",
        "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
        "Bachelor of Laws (LL.B.)",
        "Bachelor of Business Administration (BBA)",
        "Bachelor of Computer Applications (BCA)",
        "Master of Arts (M.A.)",
        "Master of Science (M.Sc.)",
        "Master of Commerce (M.Com.)",
        "Master of Technology (M.Tech.)",
        "Master of Business Administration (MBA)",
        "Master of Computer Applications (MCA)",
        "Master of Laws (LL.M.)",
        "Master of Education (M.Ed.)",
        "Chartered Accountant (CA)",
        "Company Secretary (CS)",
        "Cost and Management Accountant (CMA)",
        "Diploma in Engineering",
        "Bachelor of Pharmacy (B.Pharm.)",
        "Diploma in Nursing (GNM/ANM)",
        "Doctor of Philosophy (Ph.D.)",
        "Doctor of Science (D.Sc)",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">
          EXAM SUPERINTENDENT
        </section>
        <form id="examSuperintendentForm" onSubmit={handleSubmit}>
          <table className="table table-borderless">
            <tbody>
              {inputFields.map(({ label, name, type, placeholder }) => (
                <tr key={name}>
                  <td>
                    <label htmlFor={`input${name}`} className="form-label mt-3">
                      {label}
                    </label>
                  </td>
                  <td>
                    <input
                      type={type}
                      className="form-control mt-3"
                      id={`input${name}`}
                      name={name}
                      value={examSuperintendentFormData[name]}
                      onChange={handleInputChange}
                      required
                      placeholder={placeholder}
                    />
                  </td>
                </tr>
              ))}

              {/* Exam Superintendent Experience */}
              <tr>
                <td>
                  <label
                    htmlFor="inputExamSuperintendentExperience"
                    className="form-label mt-3"
                  >
                    Exam Superintendent Experience
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    name="examSuperintendentExperience"
                    id="inputExamSuperintendentExperience"
                    required
                    onChange={handleInputChange}
                    value={
                      examSuperintendentFormData.examSuperintendentExperience
                    }
                    step="0.1"
                  />
                </td>
              </tr>
              {selecFields.map(({ label, name, options }) => (
                <tr key={name}>
                  <td>
                    <label htmlFor={`input${name}`} className="form-label mt-3">
                      {label}
                    </label>
                  </td>
                  <td>
                    <select
                      id={`input${name}`}
                      name={name}
                      value={examSuperintendentFormData[name]}
                      required
                      className="form-control mt-3"
                      onChange={handleInputChange}
                    >
                      <option value="">Select {label}</option>
                      {options.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan={2} className="text-center">
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
