import Header from "../Header";
import Actions from "../../Actions";

const InactiveStudentDashboard = () => {
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
              Admission
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Inactive Students
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
              Inactive Students
            </li>
          </ul>

          <form className="d-flex mt-3" role="search">
            <input
              className="form-control"
              style={{ width: "100px" }}
              type="search"
              placeholder="keyword..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Student ID</th>
                <th scope="col">Fullname</th>
                <th scope="col">Status</th>
                <th scope="col">Comment</th>
                <th scope="col">Archived By</th>
                <th scope="col">Archived Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>0029</td>
                <td>GMAN AMADI</td>
                <td>Sacked</td>
                <td></td>
                <td>Demo2025</td>
                <td>01-06-2020</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                  >
                    Restore
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InactiveStudentDashboard;
