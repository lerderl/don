import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";

const EmployeeAppraisalDashboard =() => {
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
              Employee
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Files
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Employee Appraisal
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
              Employee Appraisal
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputDate" className="form-label visually-hidden">Date</label>
              <Form.Control type="date" style={{ width: "160px" }} required></Form.Control>
            </div>

            <div className="col-12">
              <label for="inputPerformance" className="form-label visually-hidden">JOB PERFORMANCE ON ASSIGNED DUTIES</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>JOB PERFORMANCE ON ASSIGNED DUTIES</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputHonesty" className="form-label visually-hidden">HONESTY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>HONESTY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputReliability" className="form-label visually-hidden">RELIABILITY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>RELIABILITY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputSchool" className="form-label visually-hidden">School</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect" required>
                <option selected>School</option>
                <option value="1">Mr.Don Schools</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputLoyalty" className="form-label visually-hidden">LOYALTY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>LOYALTY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputInitiative" className="form-label visually-hidden">INITIATIVE</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>INITIATIVE</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputRelation" className="form-label visually-hidden">HUMAN RELATION</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>HUMAN RELATION</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputBranch" className="form-label visually-hidden">Branch</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>Branch</option>
                <option value="1">No matches found</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputHardwork" className="form-label visually-hidden">DEDICATION/HARDWORK</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>DEDICATION/HARDWORK</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputSecrecy" className="form-label visually-hidden">DEPENDABILITY/SECRECY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>DEPENDABILITY/SECRECY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputConduct" className="form-label visually-hidden">DISCIPLINE/CONDUCT</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>DISCIPLINE/CONDUCT</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputDepartment" className="form-label visually-hidden">Department</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>Department</option>
                <option value="1">No matches found</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputJudgement" className="form-label visually-hidden">JUDGEMENT</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>JUDGEMENT</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputDrive" className="form-label visually-hidden">DRIVE/MOTIVATION</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>DRIVE/MOTIVATION</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputCommunicate" className="form-label visually-hidden">ABILITY TO COMMUNICATE</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>ABILITY TO COMMUNICATE</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputPosition" className="form-label visually-hidden">Position</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>Branch</option>
                <option value="1">No matches found</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputPunctuality" className="form-label visually-hidden">PUNCTUALITY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>PUNCTUALITY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputOrganising" className="form-label visually-hidden">ORGANISING ABILITY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>ORGANISING ABILITY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputConsistency" className="form-label visually-hidden">CONSISTENCY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>CONSISTENCY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputEvaluator" className="form-label visually-hidden">Evaluator</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect" required>
                <option selected>Evaluator</option>
                <option value="1">No matches found</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputVision" className="form-label visually-hidden">VISION</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>VISION</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputResponsibility" className="form-label visually-hidden">RESPONSIBILITY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>RESPONSIBILITY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputComment" className="form-label visually-hidden">Comment</label>
              <input type="text" className="form-control" id="inputComment" placeholder="Comment" />
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label for="inputEmployee" className="form-label visually-hidden">Employee</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect" required>
                <option selected>Employee</option>
                <option value="1">No matches found</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputLeadership" className="form-label visually-hidden">LEADERSHIP/PERSONALITY</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>LEADERSHIP/PERSONALITY</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputOutlook" className="form-label visually-hidden">OUTLOOK/NEATNESS</label>
              <select className="form-select" style={{ height: "36px", width: "160px" }} id="autoSizingSelect">
                <option selected>OUTLOOK/NEATNESS</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light" style={{ marginLeft: "45px" }}>
                Cancel
              </button>
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

export default EmployeeAppraisalDashboard;
