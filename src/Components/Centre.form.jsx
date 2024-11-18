import axios from "axios";
import { useCallback, useState } from "react";
import indianStateCityList from "../assets/indianStateCityList.json";

export default function Centreform() {
  const [formData, setFormData] = useState({
    centreCode: "",
    centreName: "",
    centreCountry: "",
    centreState: "",
    centreCity: "",
  });
  let [cityList, setCityList] = useState([]);
  const stateList = Object.keys(indianStateCityList)?.sort() || [];

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "centreState") {
      setCityList(indianStateCityList[value]?.sort() || []);
    }
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      centreCode: "",
      centreName: "",
      centreCountry: "",
      centreState: "",
      centreCity: "",
    });
    setCityList([]);
  }, []);

  const submitForm = useCallback(
    async (e) => {
      e.preventDefault();
      console.log("Inside submit function");
      const uri =
        import.meta.env.VITE_BACKEND_URI +
        ":" +
        import.meta.env.VITE_BACKEND_PORT;
      const completeURI = uri + "/api/register/centre";
      console.log(completeURI);
      const isFormValid = Object.values(formData).every(Boolean);
      if (
        [
          formData.centreCode,
          formData.centreName,
          formData.centreCountry,
          formData.centreState,
          formData.centreCity,
        ].some((field) => field?.trim() === "")
      ) {
        console.log(formData);

        alert("Data is invalid");
      } else {
        if (isFormValid) {
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
              if (error.response.data.statusCode === 406) {
                alert(`Dulplicate data centreCode already present`);
              }
            });
        }
      }
    },
    [formData, resetForm]
  );

  return (
    <div className="container">
      <div className="">
        <section className="text-center mt-2 fs-2 fw-bold">EXAM CENTRE</section>
        <form id="centreForm" onSubmit={submitForm}>
          <table className="table table-borderless">
            <tbody>
              {[
                { label: "Centre Code", name: "centreCode" },
                { label: "Centre Name", name: "centreName" },
              ].map(({ label, name }) => (
                <tr key={name}>
                  <td>
                    <label htmlFor={`input${name}`} className="form-label mt-3">
                      {label}
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id={`input${name}`}
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
              ))}
              {[
                {
                  label: "Country",
                  name: "centreCountry",
                  options: [{ value: "India", label: "India" }],
                },
                {
                  label: "State",
                  name: "centreState",
                  options: stateList.map((state) => ({
                    value: state,
                    label: state,
                  })),
                },
                {
                  label: "City",
                  name: "centreCity",
                  options: cityList.map((city) => ({
                    value: city,
                    label: city,
                  })),
                },
              ].map(({ label, name, options }) => (
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
                      onChange={handleInputChange}
                      value={formData[name]}
                      required
                    >
                      <option value="">Select {label}</option>
                      {options.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
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
