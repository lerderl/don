const Header = () => {
  return (
    <div className="page-top">
      <form className="search-form search-form-expanded" method="POST">
        <div className="input-group">
          <input
            size="50"
            readonly=""
            type="text"
            className="form-control"
            style={{border: "hidden"}}
            value="Session: 2018/2019 3rd Term"
          />

          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Super Admin
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><i className="icon-home"></i>My Account</a></li>
              <li><a className="dropdown-item" href="#"><i className="icon-home"></i>My Calender</a></li>
              <li><a className="dropdown-item" href="#"><i className="icon-home"></i>My Notification</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"><i className="icon-home"></i>Lock Screen</a></li>
              <li><a className="dropdown-item" href="#"><i className="icon-home"></i>Log Out</a></li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
