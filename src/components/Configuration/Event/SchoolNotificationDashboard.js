import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";

const SchoolNotificationDashboard = () => {
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
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              School Notification
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
              School Notification
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupNotice"
              >
                Notice
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupNotice"
                  placeholder="Notice"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Recipient
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search recipient..."
              />
              <datalist id="datalistOptions">
                <option value="All" />
                <option value="Admin" />
                <option value="Employee" />
                <option value="Student" />
                <option value="Parent" />
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
              <label>Start Date</label>
              <Form.Control type="date" style={{ width: "160px" }}></Form.Control>
            </div>

            <div className="col-12">
              <label>End Date</label>
              <Form.Control type="date" style={{ width: "160px" }}></Form.Control>
            </div>

            <div className="col-12 mt-5">
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

export default SchoolNotificationDashboard;
