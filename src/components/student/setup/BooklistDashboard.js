import Form from "react-bootstrap/Form";

import Header from '../Header';
import Actions from '../../Actions';

const BooklistDashboard = () => {
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
              Booklist Setup
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
              Booklist Setup
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
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Subject</option>
                <option value="1"></option>
              </select>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupAuthor">Author</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupAuthor" placeholder="Author" />
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="inputDate" className="form-label visually-hidden">Publication Date</label>
              <Form.Control type="date" style={{ width: "160px" }}></Form.Control>
            </div>           
          </form> 

          <form className="row row-cols-lg-auto g-3 align-items-center mt-4 mb-4">
            <div className="col-12">
              <select className="form-control form-select" id="autoSizingSelect" style={{ width: "160px" }}>
                <option selected>Class</option>
                <option value="1"></option>
              </select>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupTitle">Title</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupTitle" placeholder="Title" style={{ width: "160px" }} />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupPublisher">Publisher</label>
              <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupPublisher" placeholder="Publisher" />
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light" style={{ width: "75px" }}>Cancel</button>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success" style={{ width: "75px" }}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooklistDashboard;
