import img1 from "../assets/Screenshot 2024-09-25 155952.png";
import img2 from "../assets/5.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <section className="d-flex ">
        <div className="col-lg-2">
          <img src={img1} className=" img-fluid pt-2 " alt="..." />
        </div>
        <div className="mt-3 ms-3 fw-bold pe-4 ">
          <p>
            राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान, हरिद्वार
            <br />
            National Institute of Electronics & Information Technology, Haridwar
          </p>
        </div>
        <div className="mt-3 ms-5 fw-bold ps-5 text-end ">
          <p>
            Ministry of Electronics & Information Technology
            <br />
            Government of India
          </p>
        </div>
        <div className="float-end">
          <img src={img2} className=" img-fluid float-end" alt="..." />
        </div>
      </section>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4 ms-5" href="/">
            Exam Portal
          </a>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-body ">
              <div className="">
                <ul className="navbar-nav mt-2 ">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      <span className="fw-bold fs-6">EXAM CENTRE</span>
                    </Link>
                  </li>{" "}
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/esexamcentre"
                    >
                      <span className="fw-bold fs-6">ES EXAM CENTRE</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/examsuperintendent"
                    >
                      <span className="fw-bold fs-6">EXAM SUPERINTENDENT</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
