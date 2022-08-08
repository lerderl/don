import Header from '../Header';
import Actions from '../../Actions';

const FeeSetupDashboard = () => {
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
              Fee Setup
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
              Fee Setup
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Branch</option>
                <option value="1">MAGODO</option>
                <option value="2">MAGBORO</option>
              </select>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupFee">Fee</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupFee" placeholder="Fee" />
              </div>
            </div>

            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Class Fees</option>
              </select>
            </div>           
          </form> 

          <form className="row row-cols-lg-auto g-3 align-items-center mt-4">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Nominal Code</option>
                <option value="1">AP003 - VAT PAYABLE</option>
                <option value="2">IC005 - PURCHASE DISCOUNT</option>
                <option value="3">IC006 - TUITION FEE</option>
              </select>
            </div>

            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Fee group</option>
                <option value="1">School Fees</option>
                <option value="2">Transport</option>
                <option value="3">Boarding</option>
                <option value="4">Fines & Damages</option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">Cancel</button>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Fee</th>
                <th scope="col">Group</th>
                <th scope="col">Nominal A/C</th>
                <th scope="col">Target</th>
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
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeSetupDashboard;
