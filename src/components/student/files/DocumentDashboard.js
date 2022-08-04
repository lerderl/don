import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";

const DocumentDashboard = () => {
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
              Student Document
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
              Student Document
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label htmlFor="inputStudent" className="form-label visually-hidden">Student</label>
              <select className="form-select" style={{ height: "36px", width: "138px" }} id="autoSizingSelect">
                <option selected>Student</option>
                <option value="1">GBADE SEGUN - 0003</option>
                <option value="2">FIRSTJOHN JOSH - 0006</option>
                <option value="3">FIRSTJOHN JUDE - 0008</option>
              </select>
            </div>

            <div className="col-12">
              <label className="visually-hidden" htmlFor="inlineFormInputGroupFileName">File Name</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupFileName" placeholder="File Name" />
              </div>
            </div>                      

            <div className="col-12">
              <button type="submit" className="btn btn-light">
                Cancel
              </button>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label htmlFor="inputDate" className="form-label visually-hidden">Date</label>
              <Form.Control type="date" style={{ width: "138px" }}></Form.Control>
            </div>

            <div className="col-12">
              <label htmlFor="formFileSm" className="form-label visually-hidden">Small file input example</label>
              <input className="form-control form-control-sm" id="formFileSm" type="file" style={{ width: "138px" }} />
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

export default DocumentDashboard;
