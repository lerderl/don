import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";

const LibraryDashboard = () => {
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
              Student Library
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
              Student Library
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputStudent" className="form-label">Student</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Student</option>
                <option value="1">GBADE SEGUN - 0003</option>
                <option value="2">FIRSTJOHN JOSH - 0006</option>
                <option value="3">FIRSTJOHN JUDE - 0008</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputBorrowDate" className="form-label">Borrow Date</label>
              <Form.Control type="date" style={{ width: "150px" }}></Form.Control>
            </div>

            <div className="col-12">
              <label for="inputReturnDate" className="form-label">Return Date</label>
              <Form.Control type="date" style={{ width: "140px" }}></Form.Control>
            </div>           

            <div className="col-12 mt-5">
              <button type="submit" className="btn btn-light mt-3">
                Cancel
              </button>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label for="inputBookItem" className="form-label">Book Item</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Book Item</option>
                <option value="1"></option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputExpectedDate" className="form-label">Expected Date</label>
              <Form.Control type="date" style={{ width: "150px" }}></Form.Control>
            </div>

            <div className="col-12">
              <label for="inlineFormInputGroupTreatment">Comment</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupComment" placeholder="Comment" />
              </div>
            </div>

            <div className="col-12 mt-5">
              <button type="submit" className="btn btn-success mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LibraryDashboard;
