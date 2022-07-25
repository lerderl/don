import image from "../../image.png";

const SystemDashboard = () => {
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
              Configuration
            </li>
          </ul>

          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Header</th>
                <th scope="col">Footer</th>
                <th scope="col">Address</th>
                <th scope="col">Logo</th>
                <th scope="col">Banner</th>
                <th scope="col">Favicon</th>
                <th scope="col">Watermark</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mr.Don Schools</td>
                <td>Powered by: Orstinoperri & Maxfront</td>
                <td>Meridian Park Estate, Awoyaya, Lagos</td>
                <td>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                  <img src={image} alt="" width="24" />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                  <p>
                    <img src={image} alt="" width="24" />
                  </p>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                  <p>
                    <img src={image} alt="" width="24" />
                  </p>
                </td>
                <td></td>
                <td>
                  <button type="button" className="btn btn-link">
                    Edit
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

export default SystemDashboard;
