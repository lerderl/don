import Header from "../Header";
import Actions from "../../Actions";

const ResultDashboard = () => {
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
              Student Result
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
              Student Result
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputStudent" className="form-label visually-hidden">Student</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Student</option>
                <option value="1">GBADE SEGUN - 0003</option>
                <option value="2">FIRSTJOHN JOSH - 0006</option>
                <option value="3">FIRSTJOHN JUDE - 0008</option>
              </select>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupFirstCa">1st CA</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupFirstCa" placeholder="1st CA" />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupThirdCa">3rd CA</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupThirdCa" placeholder="3rd CA" />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupExam">Exam</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupExam" placeholder="Exam" />
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
              <label for="inputSubject" className="form-label visually-hidden">Subject</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Subject</option>
                <option value="1"></option>
              </select>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupSecondCa">2nd CA</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupSecondCa" placeholder="2nd CA" />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupFourthCa">4th CA</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupFourthCa" placeholder="4th CA" />
              </div>
            </div>

            <div className="col-12">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault" style={{ marginLeft: "7px" }}>
                Approve
              </label>
            </div>

            <div className="col-12" style={{ marginLeft: "67px" }}>
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

export default ResultDashboard;
