import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function ESExamCentreform() {
  const [formData, setFormData] = useState({
    examSuprintendentCentreCode: "",
    examStartDate: "",
    examEndDate: "",
    examCycle: "",
  });
  const resetForm = () => {
    setFormData({
      examSuprintendentCentreCode: "",
      examStartDate: "",
      examEndDate: "",
      examCycle: "",
    });
  };
  const [centreCodes, setCentreCodes] = useState([]);
  const [examSuperintendentCodes, setExamSuperintendentCodes] = useState([]);
  const currentYear = new Date().getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const examCycle = months.map((month) => `${month}-${currentYear}`);

  const backendURI =
    import.meta.env.VITE_BACKEND_URI + ":" + import.meta.env.VITE_BACKEND_PORT;

  const endpoints = [
    `${backendURI + "/api/register/centre"}`,
    `${backendURI + "/api/register/examSuperintendent"}`,
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [centreResponse, superintendentResponse] = await axios.all(
          endpoints.map((endpoint) => axios.get(endpoint))
        );

        setCentreCodes(
          centreResponse.data.data.map((record) => record.centreCode)
        );
        setExamSuperintendentCodes(
          superintendentResponse.data.data.map(
            (record) => record.examSuperintendentCode
          )
        );
      } catch (error) {
        console.error("axios error", error);
      }
    };

    fetchData();
  }, []);

  const selecFields = [
    {
      label: "Exam Superintendent Code",
      name: "examSuperintendentCode",
      placeholder: "Select Code",
      options: [...examSuperintendentCodes],
    },
    {
      label: "Centre Code",
      name: "centreCode",
      placeholder: "Select Code",
      options: [...centreCodes],
    },
    {
      label: "Exam Cycle",
      name: "examCycle",
      placeholder: "Select Cycle",
      options: [...examCycle],
    },
  ];
  const dateFields = [
    {
      label: "Exam Start Date",
      name: "examStartDate",
      type: "date",
    },
    {
      label: "Exam End Date",
      name: "examEndDate",
      type: "date",
    },
  ];
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    }, []);

  const submitForm = useCallback(
    async (e) => {
      e.preventDefault();
      const completeURI =
        import.meta.env.VITE_BACKEND_URI +
        ":" +
        import.meta.env.VITE_BACKEND_PORT +
        "/api/register/examSuperintendent";
      console.log(completeURI);

      setFormData({
        ...formData,
        examSuprintendentCentreCode: `${centreCodes}+${examSuperintendentCodes}`,
      });
      console.log(formData);

      if (
        [
          formData.examCycle,
          formData.examEndDate,
          formData.examStartDate,
          formData.examSuprintendentCentreCode,
        ].some((field) => field?.trim() === "")
      ) {
        console.log(formData);
        alert("Data is invalid");
      } else {
        axios
          .post(completeURI, formData)
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
    [formData]
  );

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">
          EXAM SUPERINTENDENT CENTRE
        </section>
        <form id="examSuprintendentCentreForm" onSubmit={submitForm}>
          <table className="table table-borderless">
            <tbody>
              {selecFields.map(({ label, name, placeholder, options }) => (
                <tr key={name}>
                  <td>
                    <label htmlFor={`input${name}`} className="form-label mt-3">
                      {label}
                    </label>
                  </td>
                  <td>
                    <select
                      name={name}
                      value={formData[name]}
                      id={`select${name}`}
                      onChange={handleInputChange}
                      className="form-control mt-3"
                      placeholder={placeholder}
                      required
                    >
                      <option value="">Select {label}</option>
                      {options.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {dateFields.map(({ label, name, type }) => (
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
                      value={formData[name]}
                      onChange={handleInputChange}
                      required
                    />
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
