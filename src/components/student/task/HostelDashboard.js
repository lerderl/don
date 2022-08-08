import Header from '../Header';
import Actions from '../../Actions';

const HostelDashboard = () => {
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
              Hostel Allocation
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
              Hostel Allocation
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Hostel</option>
                <option value="1"></option>
              </select>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupRoom"
              >
                Room
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupRoom"
                  placeholder="Room"
                />
              </div>
            </div>            
          </form>        

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Student</option>
                <option value="1"></option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light" style={{ width: "64px" }}>
                Cancel
              </button>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success" style={{ width: "64px" }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostelDashboard;
