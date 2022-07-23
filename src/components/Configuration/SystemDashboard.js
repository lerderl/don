const SystemDashboard = () => {
  return (
    // <></>
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
            <li className="nav-item text-secondary mt-3 mb-4" style={{ marginRight: "30px" }}>
              Configuration
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">TODAY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">MONTH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">WEEK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">DAY</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SystemDashboard;
