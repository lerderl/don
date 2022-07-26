import Header from "./Header";
import Actions from "../Actions";

const SubjectDashboard = () => {
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
              Subject
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
              Subject
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
                <option value="GEOGRAPHY/YORUBA" />
                <option value="FOOD & NUTRITION/AGRIC SCIENCE/TECH. DRAWING" />
                <option value="C.R.K/I.R.S/HISTORY" />
                <option value="OBRIGHT JASON - 0001" />
                <option value="OKETUNDE ADEYEYE - 0002" />
                <option value="OKETOLA OLAJUWON - 0003" />
              </datalist>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroup"
              >
                Subject
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupSubject"
                  placeholder="Subject"
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
                placeholder="Type to search class group..."
              />
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
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
                placeholder="Type to search class..."
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
                placeholder="Type to search teacher..."
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
                  {/* <button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button> */}
                  <div className="vr" style={{ marginLeft: "60px" }}></div>
                  {/* <button type="button" className="btn btn-link" style={{ marginLeft: "15px", marginRight: "15px" }}>Delete</button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-success" style={{ marginLeft: "15px" }}>Activated</button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubjectDashboard;
