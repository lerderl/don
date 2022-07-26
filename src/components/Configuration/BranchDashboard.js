const BranchDashboard = () => {
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
              Branch
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
              Branch
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label htmlFor="exampleDataList" className="form-label visually-hidden">Datalist example</label>
              <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search school..." />
              <datalist id="datalistOptions">
                <option value="Mr.Don Schools" />
              </datalist>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupCode">Code</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupCode" placeholder="Code" />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupTelephone">Telephone</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupTelephone" placeholder="Telephone" />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">Cancel</button>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupBranch">Branch</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupBranch" placeholder="Branch" />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupAddress">Address</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupAddress" placeholder="Address" />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupEmail">Email</label>
              <div className="input-group">
                <input type="email" className="form-control" id="inlineFormInputGroupEmail" placeholder="Email" />
              </div>
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

export default BranchDashboard;
