import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";
import image from "../../../image.png";

const AddEmployeeDashboard = () => {
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
              Employment
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Add Employee
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
              Add Employee
            </li>
          </ul>

          <img src={image} className="img-fluid rounded mx-auto d-block mt-3" alt="..." />

          <form>
            <div className="row mb-3">
              <label for="inputStaffId" className="col-sm-2 col-form-label">Staff ID</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputStaffId" placeholder="0007" required />
              </div>

              <label for="inputSchool" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>School</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">Mr.Don Schools</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">Dr.</option>
                  <option value="2">Mr.</option>
                  <option value="3">Mrs.</option>
                  <option value="4">Miss.</option>
                </select>
              </div>

              <label for="inputBranch" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Branch</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">No matches found</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputSurname" className="col-sm-2 col-form-label">Surname</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputSurname" required />
              </div>

              <label for="inputDepartment" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Department</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">No matches found</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputFirstName" required />
              </div>

              <label for="inputPosition" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Position</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">No matches found</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputMiddleName" className="col-sm-2 col-form-label">Middle Name</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputMiddleName" />
              </div>

              <label for="inputEmploymentDate" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Employment Date</label>
              <div className="col-sm-3">
                <Form.Control type="date" required></Form.Control>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputBirthDate" className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-3">
                <Form.Control type="date" required></Form.Control>
              </div>

              <label for="inputEmploymentYears" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Years in Employment</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputEmploymentYears" disabled />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputGender" className="col-sm-2 col-form-label">Gender</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>

              <label for="inputBank" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Bank</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">ACCESS BANK</option>
                  <option value="2">DIAMOND BANK</option>
                  <option value="3">GUARANTY TRUST BANK</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputState" className="col-sm-2 col-form-label">State</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">Lagos</option>
                  <option value="2">Abuja</option>
                  <option value="2">Kwara</option>
                </select>
              </div>

              <label for="inputNuban" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Account No. (NUBAN - 10 digits)</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputNuban" required />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputLGA" className="col-sm-2 col-form-label">LGA</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">No matches found</option>
                </select>
              </div>

              <label for="inputSortCode" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Sort Code</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputSortCode" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputNationality" className="col-sm-2 col-form-label">Nationality</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect">
                  <option value="1">American</option>
                  <option value="2">Canadian</option>
                  <option value="3" selected>Nigerian</option>
                </select>
              </div>

              <label for="inputNokName" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>NOK Name</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputNokName" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputTelephone" className="col-sm-2 col-form-label">Telephone</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputTelephone" />
              </div>

              <label for="inputNokRelationship" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>NOK Relationship</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">Son</option>
                  <option value="2">Brother</option>
                  <option value="3">Uncle</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Email Address</label>
              <div className="col-sm-3">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>

              <label for="inputNokTelephone" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>NOK Telephone</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputNokTelephone" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputHome" className="col-sm-2 col-form-label">Home Address</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputHome" />
              </div>

              <label for="inputNokEmail" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>NOK Email</label>
              <div className="col-sm-3">
                <input type="email" className="form-control" id="inputNokEmail" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputPfa" className="col-sm-2 col-form-label">PFA</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">AIICO PENSIONS</option>
                  <option value="2">FIDELITY PENSIONS</option>
                  <option value="3">NLPC PENSIONS</option>
                </select>
              </div>

              <label for="inputNokAddress" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>NOK Address</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputNokAddress" />
              </div>
            </div>

            <div className="row">
              <label for="inputPfaNo" className="col-sm-2 col-form-label">PFA No.</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputPfaNo" />
              </div>

              <label for="inputButton" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}></label>
              <div className="col-sm-3 mt-3 mb-3">
                <button type="submit" className="btn btn-light" style={{ width: "60px", height: "36px" }}>Reset</button>
                <button type="submit" className="btn btn-success" style={{ marginLeft: "5px", width: "60px", height: "36px" }}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeDashboard;
