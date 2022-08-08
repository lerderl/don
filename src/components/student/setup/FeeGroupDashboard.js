import Header from '../Header';
import Actions from '../../Actions';

const FeeGroupDashboard = () => {
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
              Fee Group
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
              Fee Group
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-4">
            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupDescription">Description</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupDescription" placeholder="Description" />
              </div>
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
                <th scope="col">Description</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Fines & Damages</td>
                <td><button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button></td>
                <td><button type="button" className="btn btn-link" style={{ marginLeft: "15px" }}>Delete</button></td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Boarding</td>
                <td><button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button></td>
                <td><button type="button" className="btn btn-link" style={{ marginLeft: "15px" }}>Delete</button></td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>Transport</td>
                <td><button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button></td>
                <td><button type="button" className="btn btn-link" style={{ marginLeft: "15px" }}>Delete</button></td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>School Fees</td>
                <td><button type="button" className="btn btn-link" style={{ marginRight: "15px" }}>Edit</button></td>
                <td><button type="button" className="btn btn-link" style={{ marginLeft: "15px" }}>Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeGroupDashboard;
