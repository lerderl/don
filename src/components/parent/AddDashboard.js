import Form from "react-bootstrap/Form";

import Header from "./Header";
import Actions from "../Actions";
import image from "../../image.png";

const AddDashoard = () => {
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
              Parent
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Add Parent
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
              Add Parent
            </li>
          </ul>

          <img src={image} className="img-fluid rounded mx-auto d-block mt-3" alt="..." />

          <form>
            <div className="row mb-3">
              <label for="inputParentId" className="col-sm-2 col-form-label">Parent ID</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputParentId" placeholder="0026" required />
              </div>

              <label for="inputTitle" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Title</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect" required>
                  <option selected>Select</option>
                  <option value="1">Dr.</option>
                  <option value="2">Mr.</option>
                  <option value="3">Mrs.</option>
                  <option value="4">Miss.</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputSurname" className="col-sm-2 col-form-label">Surname</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputSurname" required />
              </div>

              <label for="inputmaritalStatus" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Marital Status</label>
              <div className="col-sm-3">
                <select className="form-select" style={{ height: "36px" }} id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                  <option value="3">Divorced</option>
                  <option value="4">Separated</option>
                  <option value="5">Widow</option>
                  <option value="6">Widower</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputFirstName" className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputFirstName" required />
              </div>

              <label for="inputLanguages" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Languages</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputLanguages" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputMiddleName" className="col-sm-2 col-form-label">Middle Name</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputMiddleName" />
              </div>

              <label for="inputOccupation" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Occupation</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputOccupation" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputBirthDate" className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-3">
                <Form.Control type="date"></Form.Control>
              </div>

              <label for="inputTelephone1" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Telephone 1</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputTelephone1" required />
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

              <label for="inputTelephone2" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Telephone 2</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputTelephone2" />
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

              <label for="inputOfficeAddress" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Office Address</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputOfficeAddress" />
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

              <label for="inputHomeAddress" className="col-sm-2 col-form-label" style={{ marginLeft: "140px" }}>Home Address</label>
              <div className="col-sm-3">
                <input type="text" className="form-control" id="inputHomeAddress" />
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

            <div className="row">
              <label for="inputButton" className="col-sm-2 col-form-label"></label>
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

export default AddDashoard;
