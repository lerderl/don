import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

import Image from "../image.png";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div className="page-content-wrapper">
        <div className="page-content bg-light" style={{ minHeight: "773px" }}>
          <div className="page-content-body" id="page-content-body">
            <h3 className="page-title">Dashboard</h3>
          </div>

          <ul className="nav tab position-relative">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <button
              className="btn btn-light dropdown-toggle position-absolute top-0 end-0 dropdown-height"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Actions
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Print
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export to Excel
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export to Word
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Save As
                </a>
              </li>
            </ul>
          </ul>

          <div className="container tab mt-4">
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
              <div className="col" style={{ height: "100px" }}>
                <div className="card h-100 text-end text-bg-primary">
                  <div className="card-body mt-4">
                    <h5 className="card-title">1</h5>
                    <p className="card-text">New Students</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-end text-bg-secondary">
                  <div className="card-body mt-4">
                    <h5 className="card-title">59</h5>
                    <p className="card-text">Active Students</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-end text-bg-success">
                  <div className="card-body mt-4">
                    <h5 className="card-title">6</h5>
                    <p className="card-text">Active Employees</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 text-end text-bg-danger">
                  <div className="card-body mt-4">
                    <h5 className="card-title">0</h5>
                    <p className="card-text">Inactive Employees</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-4 row row-cols-1 row-cols-md-2">
              <ul className="nav nav-tabs">
                <li className="nav-item text-success mt-3" style={{ marginRight: "30px" }}>
                  CALENDAR
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">TODAY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">MONTH</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">WEEK</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">DAY</a>
                </li>
              </ul>
              <ul className="nav nav-tabs">
                <li className="nav-item text-success mt-3" style={{ marginRight: "30px", marginLeft: "30px" }}>
                  NOTICE BOARD
                </li>
                <li className="nav-item" style={{  marginLeft: "90px" }}>
                  <a className="nav-link active" aria-current="page" href="#">School</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Personal</a>
                </li>
              </ul>
            </div>

            <div className="row mt-4 row row-cols-1 row-cols-md-2">
              <div className="mt-4 col-6">
                <div className="calendar-container">
                  <Calendar onChange={setDate} value={date}/>
                </div>
                <div className="text-center mt-4">
                    Selected date: {date.toDateString()}
                </div>
              </div>

              <form className="d-flex" role="search">
                <img src={Image} alt="" width="30" height="35" />
                <input className="form-control me-2 bg-light" type="search" placeholder="" aria-label="Search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
