import Header from "../Header";
import Actions from "../../Actions";

const SchemeOfWorkDashboard = () => {
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
              Curriculum
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Scheme of Work
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
              Scheme of Work
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
                placeholder="Type to search subject..."
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">
                Cancel
              </button>
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
              <label htmlFor="formFileSm" className="form-label visually-hidden">Small file input example</label>
              <input className="form-control form-control-sm" id="formFileSm" type="file" style={{ width: "160px" }} />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchemeOfWorkDashboard;
