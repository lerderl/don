import Header from '../Header';
import Actions from '../../Actions';

const HostelSetupDashboard = () => {
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
              Student
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Setup
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Hostel Setup
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
              Hostel Setup
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupHostel">Hostel</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupHostel" placeholder="Hostel" style={{ width: "160px" }} />
              </div>
            </div>

            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Group</option>
                <option value="1">Male Hostel</option>
                <option value="2">Female Hostel</option>
              </select>
            </div>           
          </form> 

          <form className="row row-cols-lg-auto g-3 align-items-center mt-4">
            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupAddress">Address</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupAddress" placeholder="Address" style={{ width: "160px" }} />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light" style={{ width: "75px" }}>Cancel</button>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success" style={{ width: "75px" }}>Submit</button>
            </div>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Hostel</th>
                <th scope="col">Address</th>
                <th scope="col">Group</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HostelSetupDashboard;
