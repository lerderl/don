import Header from "../Header";
import Actions from "../../Actions";

const ActiveStudentDashboard = () => {
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
              Active Students
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
              Active Students
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
                <th scope="col">School</th>
                <th scope="col">Branch</th>
                <th scope="col">Class</th>
                <th scope="col">Action</th>
                <th scope="col">Portal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>2000</td>
                <td>JOHN EGBUNU YUSUF</td>
                <td>Mr.Don Schools</td>
                <td>Magodo</td>
                <td>SS 1A</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginRight: "15px" }}
                  >
                    View
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    Delete
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px" }}
                  >
                    Archive
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginRight: "15px" }}
                  >
                    <i className="fa fa-phone"></i>
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <i className="fa fa-envelope-o"></i>
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px" }}
                  >
                    <i className="fa fa-minus-circle"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>0053</td>
                <td>ELIAS ROSE</td>
                <td>Mr.Don Schools</td>
                <td>Magodo</td>
                <td>pry 5</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginRight: "15px" }}
                  >
                    View
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    Delete
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px" }}
                  >
                    Archive
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginRight: "15px" }}
                  >
                    <i className="fa fa-phone"></i>
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <i className="fa fa-envelope-o"></i>
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px" }}
                  >
                    <i className="fa fa-minus-circle"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>0059</td>
                <td>TAIWO DAYO</td>
                <td>Mr.Don Schools</td>
                <td>Magodo</td>
                <td>pry 6</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginRight: "15px" }}
                  >
                    View
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    Delete
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px" }}
                  >
                    Archive
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginRight: "15px" }}
                  >
                    <i className="fa fa-phone"></i>
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px", marginRight: "15px" }}
                  >
                    <i className="fa fa-envelope-o"></i>
                  </button>
                  <div className="vr"></div>
                  <button
                    type="button"
                    className="btn btn-link"
                    // style={{ marginLeft: "15px" }}
                  >
                    <i className="fa fa-minus-circle"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <nav aria-label="Page navigation example" className="mb-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#!">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ActiveStudentDashboard;
