import Header from "../Header";
import Actions from "../../Actions";

const FellowshipDashboard = () => {
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
              Extra Activities
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Fellowship
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
              Fellowship
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupFellowship"
              >
                Fellowship
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupFellowship"
                  placeholder="Fellowship"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupGroup"
              >
                Group
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupGroup"
                  placeholder="Group"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Fellowship Leader
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search club fellowship leader..."
              />
              <datalist id="datalistOptions">
                <option value="OBRIGHT JASON - 0001" />
                <option value="CROWFORD CHLOE - 0004" />
                <option value="AKINDELE BADMUS - 0005" />
              </datalist>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">
                Cancel
              </button>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Fellowship</th>
                <th scope="col">Group</th>
                <th scope="col">Fellowship Leader</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div className="vr" style={{ marginLeft: "90px" }}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FellowshipDashboard;
