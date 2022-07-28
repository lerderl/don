import Form from "react-bootstrap/Form";

import Header from "../Header";
import Actions from "../../Actions";

const ExamDashboard = () => {
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
              Timetable
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Exam Timetable
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
              Exam Timetable
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
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
                placeholder="Type to search branch..."
              />
              <datalist id="datalistOptions">
                <option value="MAGODO" />
                <option value="MAGBORO" />
                <option value="Monday" />
                <option value="Tuesday" />
                <option value="Wednesday" />
                <option value="Thursday" />
                <option value="Friday" />
              </datalist>
            </div>

            <div className="col-12">
              <label className="fs-6">Date</label>
              <Form.Control type="date" style={{ width: "160px", height: "20px" }}></Form.Control>
            </div>

            <div className="col-12">              
              <label className="visually-hidden" for="inlineFormInputGroupStartPeriod">Start Period</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupStartPeriod" placeholder="Start Period" />
              </div>
            </div>

            <div className="col-12">              
              <label className="visually-hidden" for="inlineFormInputGroupInvigilators">Invigilators</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupInvigilators" placeholder="Invigilators" />
              </div>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
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
                placeholder="Type to search class..."
              />
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
                placeholder="Type to search subject..."
              />
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupEndPeriod">End Period</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupEndPeriod" placeholder="End Period" />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">
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

export default ExamDashboard;
