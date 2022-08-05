import Header from '../../Header';
import Actions from '../../../Actions';

const BehaviourDashboard = () => {
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
              File Upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Student Behaviour
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
              Student Behaviour
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Branch</option>
                <option value="1">MAGODO</option>
                <option value="2">MAGBORO</option>
              </select>
            </div>

            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Class</option>
                <option value="1"></option>
              </select>
            </div>
          </form>        

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label
                htmlFor="formFileSm"
                className="form-label visually-hidden"
              >
                Small file input example
              </label>
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
                style={{ width: "160px" }}
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Upload
              </button>
            </div>
          </form>

          <p className='mt-2'>File Type: CSV comma delimited</p>
          <p>NB: First row as header; Commas and Quotes not allowed</p>
          <p>
            File Format: [<b>Student ID</b>] [<b>Personal Development</b>] [<b>Mental Alertness</b>]
            [<b>General Attitude and Habits</b>] [<b>Adjustment in School</b>] [<b>Relationship with Teachers</b>]
            [<b>Hand Writing</b>] [<b>Verbal Fluency</b>] [<b>Sport and Games</b>] [<b>Handling Tools</b>] [<b>Musical Skills</b>]
          </p>
          <p>
            Score Grading: <b>5</b> - Excellent <b>|</b> <b>4</b> - Very Good <b>|</b> <b>3</b> - Average <b>|</b>
            <b>2</b> - Satisfactory <b>|</b> <b>1</b> - Unsatisfactory
          </p>     
        </div>
      </div>
    </div>
  );
};

export default BehaviourDashboard;
