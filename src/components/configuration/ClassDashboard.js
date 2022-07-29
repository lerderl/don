import Header from "./Header";
import Actions from "../Actions";

const ClassDashboard = () => {
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
              Class
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
              Class
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Datalist example
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search branch..."
              />
              <datalist id="datalistOptions">
                <option value="MAGODO" />
                <option value="MAGBORO" />
                <option value="RECEPTION" />
                <option value="NURSERY SCHOOL" />
                <option value="PRIMARY SCHOOL" />
                <option value="JUNIOR SECONDARY" />
                <option value="SENIOR SECONDARY" />
              </datalist>
            </div>

            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Datalist example
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search class group..."
              />
            </div>

            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Datalist example
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search class order..."
              />
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupClass"
              >
                Class
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupClass"
                  placeholder="Class"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Datalist example
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search class teacher..."
              />
            </div>

            <div className="col-12" style={{ marginLeft: "20px" }}>
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
                <th scope="col">Class</th>
                <th scope="col">Group</th>
                <th scope="col">Order</th>
                <th scope="col">Class Teacher</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div className="vr" style={{ marginLeft: "60px" }}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassDashboard;
