import Header from '../Header';
import Actions from '../../Actions';

const StudentChangeDashboard = () => {
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
              Student Change
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
              Student Change
            </li>
          </ul>

          <form className='d-grid gap-2 col-6 mx-auto mt-4'>
            <div className="row mb-3">
              <label htmlFor="inputStudent" className="col-sm-2 col-form-label">Student</label>
              <div className="col-sm-6">
                <select className="form-control form-select" id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">GBADE SEGUN - 0003</option>
                  <option value="2">FIRSTJOHN JOSH - 0006</option>
                  <option value="3">FIRSTJOHN JUDE - 0008</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputData" className="col-sm-2 col-form-label">Data</label>
              <div className="col-sm-6">
                <select className="form-control form-select" id="autoSizingSelect">
                  <option selected>Select</option>
                  <option value="1">Student ID</option>
                  <option value="2">Surname</option>
                  <option value="3">First Name</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputCurrentStatus" className="col-sm-2 col-form-label">Current Status</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputCurrentStatus" disabled/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputNewStatus" className="col-sm-2 col-form-label">New Status</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputNewStatus" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputComment" className="col-sm-2 col-form-label">Comment</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputComment" />
              </div>
            </div>

            <hr />

            <div className="d-grid gap-2 d-md-block mb-5">
              <label htmlFor="inputComment" className="col-sm-2 col-form-label"></label>
              <button className="btn btn-primary me-2" type="button">Update</button>
              <button className="btn btn-light" type="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentChangeDashboard;
