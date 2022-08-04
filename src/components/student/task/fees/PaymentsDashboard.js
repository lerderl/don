import Form from "react-bootstrap/Form";

import Header from '../../Header';
import Actions from '../../../Actions';

const PaymentsDashboard = () => {
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
              Task
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Fees
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Fee Payments
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
              Fee Payments
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label
                htmlFor="student"
                className="form-label visually-hidden"
              >
                Student
              </label>
              <select className="form-control form-select" style={{ height: "36px", width: "138px" }} id="autoSizingSelect">
                <option selected>Student</option>
                <option value="1">GBADE SEGUN - 0003</option>
                <option value="2">FIRSTJOHN JOSH - 0006</option>
                <option value="3">FIRSTJOHN JUDE - 0008</option>
              </select>
            </div>

            <div className="col-12">
              <label
                htmlFor="feeGroup"
                className="form-label visually-hidden"
              >
                Fee Group
              </label>
              <select className="form-control form-select" style={{ height: "36px", width: "138px" }} id="autoSizingSelect">
                <option selected>Fees</option>
                <option value="1">No matches found</option>
              </select>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                htmlFor="inlineFormInputGroupAmount"
              >
                Amount
              </label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="inlineFormInputGroupAmount"
                  placeholder="Amount"
                />
              </div>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label htmlFor="inputDate" className="form-label visually-hidden">Date</label>
              <Form.Control type="date" style={{ width: "138px" }}></Form.Control>
            </div>

            <div className="col-12">
              <label className="visually-hidden" htmlFor="inlineFormInputGroupDetails">Details</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupDetails" placeholder="Details" />
              </div>
            </div>

            <div className="col-12" style={{ marginLeft: "15px" }}>
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
        </div>
      </div>
    </div>
  );
};

export default PaymentsDashboard;
