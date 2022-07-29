import Header from "./Header";
import Actions from "../Actions";

const LibraryDashboard = () => {
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
              Library
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
              Library
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label
                htmlFor="exampleDataList"
                className="form-label visually-hidden"
              >
                Branch
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
                <option value="Text Book" />
                <option value="Note Book" />
                <option value="Story Book" />
                <option value="Dictionary" />
                <option value="Encyclopedia" />
                <option value="Others" />
              </datalist>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupBookTitle"
              >
                Book Title
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupBookTitle"
                  placeholder="Book Title"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupPublisher"
              >
                Publisher
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupPublisher"
                  placeholder="Publisher"
                />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden" for="inlineFormInputGroupISBN">
                ISBN
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupISBN"
                  placeholder="ISBN"
                />
              </div>
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
                Category
              </label>
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search category..."
              />
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupAuthor"
              >
                Author
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupAuthor"
                  placeholder="Author"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupPublicationDate"
              >
                Publication Date
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupAddressPublicationDate"
                  placeholder="Publication Date"
                />
              </div>
            </div>

            <div className="col-12">
              <label
                className="visually-hidden"
                for="inlineFormInputGroupQty"
              >
                Qty
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  id="inlineFormInputGroupQty"
                  placeholder="Qty"
                />
              </div>
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

export default LibraryDashboard;
