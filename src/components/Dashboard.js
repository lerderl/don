import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-content-wrapper">
        <div className="page-content" style={{ minHeight: "555px" }}>
          {/* <div className="theme-panel">
            <div
              className="toggler tooltips"
              data-container="body"
              data-placement="left"
              data-html="true"
              data-original-title="Click to open advance theme customizer panel"
            >
              <i className="icon-settings"></i>
            </div>
            <div className="toggler-close">
              <i className="icon-close"></i>
            </div>
            <div className="theme-options">
              <div className="theme-option theme-colors clearfix">
                <span>THEME COLOR </span>
                <ul>
                  <li
                    className="color-default current tooltips"
                    data-style="default"
                    data-container="body"
                    data-original-title="Default"
                  ></li>
                  <li
                    className="color-grey tooltips"
                    data-style="grey"
                    data-container="body"
                    data-original-title="Grey"
                  ></li>
                  <li
                    className="color-blue tooltips"
                    data-style="blue"
                    data-container="body"
                    data-original-title="Blue"
                  ></li>
                  <li
                    className="color-dark tooltips"
                    data-style="dark"
                    data-container="body"
                    data-original-title="Dark"
                  ></li>
                  <li
                    className="color-light tooltips"
                    data-style="light"
                    data-container="body"
                    data-original-title="Light"
                  ></li>
                </ul>
              </div>
              <div className="theme-option">
                <span>Layout </span>
                <select className="layout-option form-control input-small">
                  <option value="fluid" selected="selected">
                    Fluid
                  </option>
                  <option value="boxed">Boxed</option>
                </select>
              </div>
              <div className="theme-option">
                <span>Header </span>
                <select className="page-header-option form-control input-small">
                  <option value="fixed" selected="selected">
                    Fixed
                  </option>
                  <option value="default">Default</option>
                </select>
              </div>
              <div className="theme-option">
                <span>Sidebar Mode</span>
                <select className="sidebar-option form-control input-small">
                  <option value="fixed" selected="selected">
                    Fixed
                  </option>
                  <option value="default">Default</option>
                </select>
              </div>
              <div className="theme-option">
                <span>Sidebar Style</span>
                <select className="sidebar-style-option form-control input-small">
                  <option value="default">Default</option>
                  <option value="compact" selected="selected">
                    Compact
                  </option>
                </select>
              </div>
              <div className="theme-option">
                <span>Sidebar Menu </span>
                <select className="sidebar-menu-option form-control input-small">
                  <option value="accordion" selected="selected">
                    Accordion
                  </option>
                  <option value="hover">Hover</option>
                </select>
              </div>
              <div className="theme-option">
                <span>Sidebar Position </span>
                <select className="sidebar-pos-option form-control input-small">
                  <option value="left" selected="selected">
                    Left
                  </option>
                  <option value="right">Right</option>
                </select>
              </div>
              <div className="theme-option">
                <span>Footer </span>
                <select className="page-footer-option form-control input-small">
                  <option value="fixed">Fixed</option>
                  <option value="default" selected="selected">
                    Default
                  </option>
                </select>
              </div>
            </div>
          </div> */}
          <div className="page-content-body" id="page-content-body">
            <h3 className="page-title">Dashboard</h3>
          </div>

          <ul className="nav bg-light position-relative">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <button
              className="btn btn-light dropdown-toggle position-absolute top-0 end-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
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

          {/* <ul className="page-breadcrumb">
            <li>
              <i className="fa fa-home"></i>
              <a href="index.php">Home</a>
              <i className="fa fa-angle-right"></i>
            </li>
            <li>
              <a href="#">Dashboard </a>
            </li>
          </ul>
          <div className="page-toolbar">
            <div className="btn-group pull-right">
              <button
                type="button"
                className="btn btn-fit-height grey-salt dropdown-toggle hover-initialized"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="1000"
                data-close-others="true"
              >
                Actions <i className="fa fa-angle-down"></i>
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li>
                  <a href="#">Print</a>
                </li>
                <li>
                  <a href="#">Export to Excel</a>
                </li>
                <li>
                  <a href="#">Export to Word</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">Save As</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
