const SchoolDashboard = () => {
  return (
    <div className="page-content-wrapper">
      <div className="page-content bg-light" style={{ minHeight: "773px" }}>
        <div className="page-content-body" id="page-content-body">
          <h3 className="page-title">Configuration</h3>
        </div>

        <ul className="nav tab position-relative">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Configuration
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              School
            </a>
          </li>
          <button
            type="button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            className="btn btn-light dropdown-toggle position-absolute top-0 end-0 dropdown-height"
          >
            Actions
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Print
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Export to Excel
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Export to Word
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Save As
              </a>
            </li>
          </ul>
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
                  <button type="button" className="btn btn-link">Edit</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link">Delete</button>
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
