import Header from '../../Header';
import Actions from '../../../Actions';

const TransactionDashboard = () => {
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
              Fee Transaction
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
              Fee Transaction
            </li>
          </ul>

          <form className="d-flex mt-3" role="search">
            <input className="form-control" style={{ width: "100px" }} type="search" placeholder="keyword..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <table className="table table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Date</th>
                <th scope="col">Student</th>
                <th scope="col">Fee Group</th>
                <th scope="col">Amount</th>
                <th scope="col">Details</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td></td>
                <td></td>
                <td></td>
                <td>0.00</td>
                <td></td>
                <td>
                  <button type="button" className="btn btn-link" style={{ marginRight: "15px" }}></button>
                  <div className="vr"></div>
                  <button type="button" className="btn btn-link" style={{ marginLeft: "15px", marginRight: "15px" }}></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionDashboard;
