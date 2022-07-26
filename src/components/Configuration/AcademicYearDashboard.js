import Form from "react-bootstrap/Form";

import Header from "./Header";
import Actions from "../Actions";

const AcademicYearDashboard = () => {
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
              Configuration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Academic Year
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
              Academic Year
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupSession"
              >
                Session
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupSession"
                  placeholder="Session"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Datalist example
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search term..."
              />
              <datalist id="datalistOptions">
                <option value="First" />
                <option value="Second" />
                <option value="Third" />
              </datalist>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">
                Cancel
              </button>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label>Vacation Date</label>
              <Form.Control type="date" style={{ width: "160px" }}></Form.Control>
            </div>

            <div className="col-12">
              <label>Next Term</label>
              <Form.Control type="date" style={{ width: "160px" }}></Form.Control>
            </div>

            <div className="col-12 mt-5">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Session</th>
                <th scope="col">Term</th>
                <th scope="col">Vacation Date</th>
                <th scope="col">Next Term</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>2018/2019</td>
                <td>Third</td>
                <td></td>
                <td></td>
                <td>
                  <button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link" style={{ marginLeft: "15px", marginRight: "15px" }}>Delete</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-success" style={{ marginLeft: "15px" }}>Activated</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>2018/2019</td>
                <td>Second</td>
                <td></td>
                <td></td>
                <td>
                  <button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link" style={{ marginLeft: "15px", marginRight: "15px" }}>Delete</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link" style={{ marginLeft: "15px" }}>Activate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AcademicYearDashboard;
