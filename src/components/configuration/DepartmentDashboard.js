import Header from "./Header";
import Actions from "../Actions";

const DepartmentDashboard = () => {
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
              Department
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
              Department
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2 mb-4">
            <div className="col-12">
              <label htmlFor="exampleDataList" className="form-label visually-hidden">Datalist example</label>
              <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search school..." />
              <datalist id="datalistOptions">
                <option value="Mr.Don Schools" />
              </datalist>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupDepartment">Department</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupDepartment" placeholder="Department" />
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
        </div>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
