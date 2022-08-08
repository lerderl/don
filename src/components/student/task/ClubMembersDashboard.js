import Form from "react-bootstrap/Form";

import Header from '../Header';
import Actions from '../../Actions';

const ClubMembersDashboard = () => {
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
              Task
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Club Members
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
              Club Members
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Club</option>
                <option value="1"></option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="inputDate" className="form-label visually-hidden">Date</label>
              <Form.Control type="date" style={{ width: "160px" }}></Form.Control>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">
                Cancel
              </button>
            </div>            
          </form>        

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2 mb-4">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Student</option>
                <option value="1">GBADE SEGUN - 0003</option>
                <option value="2">FIRSTJOHN JOSH - 0006</option>
                <option value="3">FIRSTJOHN JUDE - 0008</option>
              </select>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupID"
              >
                Member ID
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "160px" }}
                  id="inlineFormInputGroupID"
                  placeholder="Member ID (optional)"
                />
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

export default ClubMembersDashboard;
