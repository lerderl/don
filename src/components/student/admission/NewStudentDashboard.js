import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";
import image from "../../../image.png";

const NewStudentDashboard = () => {
  return (
    <div className="page-content-wrapper">
      <div className="page-content bg-light" style={{ minHeight: "773px" }}>
        <Header />

        <ul className="nav tab position-relative">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Student
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Admission
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              New Students
            </a>
          </li>
          <Actions />
        </ul>

        <div className="container tab mt-4">
          <ul className="nav nav-tabs mt-4">
            <li
              className="nav-item text-secondary mt-3 mb-4"
              style={{ marginRight: "30px" }}
            >
              New Students
            </li>
          </ul>

          <form className="d-flex mt-3" role="search">
            <input className="form-control" style={{ width: "100px" }} type="search" placeholder="keyword..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Student ID</th>
                <th scope="col">Fullname</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">State</th>
                <th scope="col">LGA</th>
                <th scope="col">Telephone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>0061</td>
                <td>ABIOLA SOLA INI</td>
                <td>Male</td>
                <td>27</td>
                <td>Abuja</td>
                <td>Abaji</td>
                <td>Telephone</td>
                <td>
                  <button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link" style={{ marginLeft: "15px", marginRight: "15px" }}>Delete</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link" style={{ marginLeft: "15px" }}>Approve</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewStudentDashboard;
