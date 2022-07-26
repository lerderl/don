import Header from "./Header";
import Actions from "../Actions";

const SchoolDashboard = () => {
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
              School
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
              School
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-4">
            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupSchool">School</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupSchool" placeholder="School" />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupCode">Code</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupCode" placeholder="Code" />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">Cancel</button>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">School</th>
                <th scope="col">Code</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mr.Don Schools</td>
                <td>001</td>
                <td>
                  <button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link" style={{ marginLeft: "15px" }}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
