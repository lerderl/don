const Actions = () => {
  return (
    <>
      <button
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        className="btn btn-light dropdown-toggle position-absolute top-0 end-0 dropdown-height"
      >
        Actions
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="#!">
            Print
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#!">
            Export to Excel
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#!">
            Export to Word
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#!">
            Save As
          </a>
        </li>
      </ul>
    </>
  );
};

export default Actions;
