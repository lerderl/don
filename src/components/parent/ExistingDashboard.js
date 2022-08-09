import Header from "./Header";
import Actions from "../Actions";

const ExistingDashboard = () => {
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
              Parent
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Existing Parents
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
              Existing Parents
            </li>
          </ul>

          <form className="d-flex mt-3" role="search">
            <input
              className="form-control"
              style={{ width: "100px" }}
              type="search"
              placeholder="keyword..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <table className="table-fluid table-bordered mt-5 mb-5">
            <thead>
              <tr>
                <th scope="col">Serial</th>
                <th scope="col">Parent ID</th>
                <th scope="col">Title</th>
                <th scope="col">Fullname</th>
                <th scope="col">Gender</th>
                <th scope="col">Marital Status</th>
                <th scope="col">State</th>
                <th scope="col">LGA</th>
                <th scope="col">Telephone</th>
                <th colSpan="2">Action</th>
                <th colSpan="3">Portal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>0001</td>
                <td>Mr.</td>
                <td>OGBUEFI MIKE SOLOMON</td>
                <td>Male</td>
                <td>Married</td>
                <td>Abia</td>
                <td>Isiala Ngwa North</td>
                <td>08132340690</td>
                <td><button type="button" className="btn btn-link">View</button></td>
                <td><button type="button" className="btn btn-link">Delete</button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-phone"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-envelope-o"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-minus-circle"></i></button></td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>0002</td>
                <td>Mr.</td>
                <td>OMALEFI GABI SEEDER</td>
                <td>Male</td>
                <td>Married</td>
                <td>Adamawa</td>
                <td>Hong</td>
                <td>09000005000</td>
                <td><button type="button" className="btn btn-link">View</button></td>
                <td><button type="button" className="btn btn-link">Delete</button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-phone"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-envelope-o"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-minus-circle"></i></button></td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>0025</td>
                <td>Mrs.</td>
                <td>OYEWOLE ISHOLA</td>
                <td>Female</td>
                <td>Married</td>
                <td>Osun</td>
                <td>Ede North</td>
                <td>09010025003</td>
                <td><button type="button" className="btn btn-link">View</button></td>
                <td><button type="button" className="btn btn-link">Delete</button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-phone"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-envelope-o"></i></button></td>
                <td><button type="button" className="btn btn-link"><i className="fa fa-minus-circle"></i></button></td>
              </tr>
            </tbody>
          </table>

          <nav aria-label="Page navigation example" className="mb-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#!">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ExistingDashboard;
