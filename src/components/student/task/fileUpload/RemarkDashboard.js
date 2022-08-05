import Header from '../../Header';
import Actions from '../../../Actions';

const RemarkDashboard = () => {
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
              Student Remark
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
              Student Remark
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
            File Format: [<b>Student ID</b>] [<b>Class Teacher</b>] [<b>Principal</b>]
          </p>   
        </div>
      </div>
    </div>
  );
};

export default RemarkDashboard;
