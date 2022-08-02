import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";

const AttendanceDashboard = () => {
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
              Files
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Student Attendance
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
              Student Attendance
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputStudent" className="form-label visually-hidden">Student</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Student</option>
                <option value="1">GBADE SEGUN - 0003</option>
                <option value="2">FIRSTJOHN JOSH - 0006</option>
                <option value="3">FIRSTJOHN JUDE - 0008</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputDate" className="form-label visually-hidden">Date</label>
              <Form.Control type="date" style={{ width: "138px" }}></Form.Control>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">
                Cancel
              </button>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label for="inputStatus" className="form-label visually-hidden">Status</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Status</option>
                <option value="1">Absent</option>
                <option value="1">Present</option>
              </select>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupExcuse">Excuse</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupExcuse" placeholder="Excuse" />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
