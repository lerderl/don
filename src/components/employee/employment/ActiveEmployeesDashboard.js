import Header from "../Header";
import Actions from "../../Actions";

const ActiveEmployeesDashboard = () => {
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
              Employee
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Employment
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Active Employees
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
              Active Employees
            </li>
          </ul>

          <form className="d-flex mt-3" role="search">
            <input className="form-control" style={{ width: "100px" }} type="search" placeholder="keyword..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <table className="table-fluid table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Staff ID</th>
                <th scope="col">Title</th>
                <th scope="col">Fullname</th>
                <th scope="col">School</th>
                <th scope="col">Branch</th>
                <th scope="col">Department</th>
                <th scope="col">Position</th>
                <th colSpan="3">Action</th>
                <th colSpan="3">Portal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>0003</td>
                <td>Mrs.</td>
                <td>OKETOLA OLAJUWON</td>
                <td>Mr.Don Schools</td>
                <td>Magodo</td>
                <td>ACADEMIC</td>
                <td>PRINCIPAL</td>
                <td><button type="button" className="btn btn-link">View</button></td>
                <td><button type="button" className="btn btn-link">Delete</button></td>
                <td><button type="button" className="btn btn-link">Archive</button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-phone"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-envelope-o"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-minus-circle"></i></button></td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>0005</td>
                <td>Mr.</td>
                <td>AKINDELE BADMUS</td>
                <td>Mr.Don Schools</td>
                <td>Magboro</td>
                <td>NON-ACADEMIC</td>
                <td>CLEANER</td>
                <td><button type="button" className="btn btn-link">View</button></td>
                <td><button type="button" className="btn btn-link">Delete</button></td>
                <td><button type="button" className="btn btn-link">Archive</button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-phone"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-envelope-o"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-minus-circle"></i></button></td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>0001</td>
                <td>Mr.</td>
                <td>OBRIGHT JASON</td>
                <td>Mr.Don Schools</td>
                <td>Magboro</td>
                <td>ACADEMIC</td>
                <td>SUBJECT TEACHER</td>
                <td><button type="button" className="btn btn-link">View</button></td>
                <td><button type="button" className="btn btn-link">Delete</button></td>
                <td><button type="button" className="btn btn-link">Archive</button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-phone"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-envelope-o"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-minus-circle"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveEmployeesDashboard;
