import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";
import image from "../../../image.png";

const AddStudentDashboard = () => {
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
              Add Student
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
              Add Student
            </li>
          </ul>

          <img src={image} className="img-fluid rounded mx-auto d-block mt-3" alt="..." />

          <form>
            <div className="row mb-3">
              <label for="inputStudentId" className="col-sm-2 col-form-label">Student ID</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputStudentId" placeholder="0062" required />
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
              <label for="inputSurname" className="col-sm-2 col-form-label">Surname</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputSurname" required />
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
              <label for="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputFirstName" required />
              </div>

              <label for="inputClass" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Class</label>
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

              <label for="inputClassAdmitted" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Class Admitted</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">Reception</option>
                  <option value="2">Nursery 1</option>
                  <option value="3">Nursery 2</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputBirthDate" className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-3">
                <Form.Control type="date"></Form.Control>
              </div>

              <label for="inputAdmissionDate" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Admission Date</label>
              <div className="col-sm-3">
                <Form.Control type="date"></Form.Control>
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

              <label for="inputParent" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Parent</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">OGBUEFI MIKE - 0001</option>
                  <option value="2">OMALEFI GABI - 0002</option>
                  <option value="3">GMAN ARI - 0003</option>
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

              <label for="inputRelationship" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Relationship</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">Mother</option>
                  <option value="2">Sister</option>
                  <option value="3">Niece</option>
                </select>
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

              <label for="inputTelephone" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Telephone</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputFirstName" required />
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

              <label for="inputEmail3" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Email Address</label>
              <div className="col-sm-3">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>

            <div className="mb-5" style={{ marginLeft: "133px" }}>
              <div className="col-sm-3 mt-4 mb-5">
                <button type="submit" className="btn btn-light" style={{ width: "60px", height: "36px" }}>Cancel</button>
                <button type="submit" className="btn btn-success" style={{ marginLeft: "5px", width: "60px", height: "36px" }}>Submit</button>
              </div>
              <label for="inputHome" className="col-sm-2 col-form-label" style={{ marginLeft: "175px" }}>Home Address</label>
              <div className="col-sm-3 mb-5" style={{ marginLeft: "26px" }}>
                <input type="text" className="form-control" id="inputHome" style={{ width: "208px" }} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudentDashboard;
