import Header from "../Header";
import Actions from "../../Actions";

const LessonPlanDashboard = () => {
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
              Lesson Plan
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
              Lesson Plan
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
                <option value="Week 1" />
                <option value="Week 2" />
                <option value="Week 3" />
                <option value="OKETOLA OLAJUWON - 0003" />
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
                placeholder="Type to search week..."
              />
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
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault" style={{ marginLeft: "7px" }}>
                Approve
              </label>
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
              <label
                htmlFor="formFileSm"
                className="form-label visually-hidden"
              >
                Small file input example
              </label>
              <input
                className="form-control form-control-sm"
                id="formFileSm"
                type="file"
                style={{ width: "160px" }}
              />
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
                placeholder="Type to search verified by..."
              />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>

          <table className="mt-5">
            <tbody className="mt-5">
              <tr className="mt-5">
                <td className="mt-5">
                  <ul className="wysihtml5-toolbar">
                    <li className="dropdown">
                      <a
                        className="btn default dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#!"
                      >
                        <i className="icon-font"></i>&nbsp;
                        <span className="current-font">Normal text</span>&nbsp;
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a
                            data-wysihtml5-command="formatBlock"
                            data-wysihtml5-command-value="div"
                            tabindex="-1"
                            href="#!"
                            unselectable="on"
                          >
                            Normal text
                          </a>
                        </li>
                        <li>
                          <a
                            data-wysihtml5-command="formatBlock"
                            data-wysihtml5-command-value="h1"
                            tabindex="-1"
                            href="#!"
                            unselectable="on"
                          >
                            Heading 1
                          </a>
                        </li>
                        <li>
                          <a
                            data-wysihtml5-command="formatBlock"
                            data-wysihtml5-command-value="h2"
                            tabindex="-1"
                            href="#!"
                            unselectable="on"
                          >
                            Heading 2
                          </a>
                        </li>
                        <li>
                          <a
                            data-wysihtml5-command="formatBlock"
                            data-wysihtml5-command-value="h3"
                            tabindex="-1"
                            href="#!"
                            unselectable="on"
                          >
                            Heading 3
                          </a>
                        </li>
                        <li>
                          <a
                            data-wysihtml5-command="formatBlock"
                            data-wysihtml5-command-value="h3"
                            tabindex="-1"
                            href="#!"
                            unselectable="on"
                          >
                            Heading 4
                          </a>
                        </li>
                        <li>
                          <a
                            data-wysihtml5-command="formatBlock"
                            data-wysihtml5-command-value="h3"
                            tabindex="-1"
                            href="#!"
                            unselectable="on"
                          >
                            Heading 5
                          </a>
                        </li>
                        <li>
                          <a
                            data-wysihtml5-command="formatBlock"
                            data-wysihtml5-command-value="h3"
                            tabindex="-1"
                            href="#!"
                            unselectable="on"
                          >
                            Heading 6
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div className="btn-group">
                        <a
                          className="btn default"
                          data-wysihtml5-command="bold"
                          title="CTRL+B"
                          tabindex="-1"
                          href="#!"
                          unselectable="on"
                        >
                          Bold
                        </a>
                        <a
                          className="btn default"
                          data-wysihtml5-command="italic"
                          title="CTRL+I"
                          tabindex="-1"
                          href="#!"
                          unselectable="on"
                        >
                          Italic
                        </a>
                        <a
                          className="btn default"
                          data-wysihtml5-command="underline"
                          title="CTRL+U"
                          tabindex="-1"
                          href="#!"
                          unselectable="on"
                        >
                          Underline
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className="btn-group">
                        <a
                          className="btn default"
                          data-wysihtml5-command="insertUnorderedList"
                          title="Unordered list"
                          tabindex="-1"
                          href=":;"
                          unselectable="on"
                        >
                          <i className="fa fa-list"></i>
                        </a>
                        <a
                          className="btn default"
                          data-wysihtml5-command="insertOrderedList"
                          title="Ordered list"
                          tabindex="-1"
                          href=":;"
                          unselectable="on"
                        >
                          <i className="fa fa-th-list"></i>
                        </a>
                        <a
                          className="btn default"
                          data-wysihtml5-command="Outdent"
                          title="Outdent"
                          tabindex="-1"
                          href=":;"
                          unselectable="on"
                        >
                          <i className="fa fa-outdent"></i>
                        </a>
                        <a
                          className="btn default"
                          data-wysihtml5-command="Indent"
                          title="Indent"
                          tabindex="-1"
                          href=":;"
                          unselectable="on"
                        >
                          <i className="fa fa-indent"></i>
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className="btn-group">
                        <a
                          className="btn default"
                          data-wysihtml5-action="change_view"
                          title="Edit HTML"
                          tabindex="-1"
                          href=":;"
                          unselectable="on"
                        >
                          <i className="fa fa-pencil"></i>
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className="bootstrap-wysihtml5-insert-link-modal modal fade">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <a className="close" data-bs-dismiss="modal" href=";">
                                ×
                              </a>
                              <h3>Insert link</h3>
                            </div>
                            <div className="modal-body">
                              <input
                                value="http://"
                                className="bootstrap-wysihtml5-insert-link-url form-control input-xlarge"
                              />
                              <label style={{ marginTop: "5px" }}>
                                <div className="checker">
                                  <span className="checked">
                                    <input
                                      type="checkbox"
                                      className="bootstrap-wysihtml5-insert-link-target"
                                      checked=""
                                    />
                                  </span>
                                </div>
                                Open link in new window
                              </label>
                            </div>
                            <div className="modal-footer">
                              <a
                                href="#!"
                                className="btn default"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </a>
                              <a
                                href="#!"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Insert link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        className="btn default"
                        data-wysihtml5-command="createLink"
                        title="Insert link"
                        tabindex="-1"
                        href=":;"
                        unselectable="on"
                      >
                        <i className="fa fa-share"></i>
                      </a>
                    </li>

                    <li>
                      <div className="bootstrap-wysihtml5-insert-image-modal modal fade">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <a className="close" data-bs-dismiss="modal" href=";">
                                ×
                              </a>
                              <h3>Insert image</h3>
                            </div>
                            <div className="modal-body">
                              <input
                                value="http://"
                                className="bootstrap-wysihtml5-insert-image-url form-control input-xlarge"
                              />
                            </div>
                            <div className="modal-footer">
                              <a
                                href="#!"
                                className="btn default"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </a>
                              <a
                                href="#!"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                              >
                                Insert image
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        className="btn default"
                        data-wysihtml5-command="insertImage"
                        title="Insert image"
                        tabindex="-1"
                        href=":;"
                        unselectable="on"
                      >
                        <i className="fa fa-picture-o"></i>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <textarea className="form-control mb-4" id="exampleFormControlTextarea1" rows="15" placeholder="Assignment"></textarea>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanDashboard;
