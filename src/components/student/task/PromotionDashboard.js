import Header from '../Header';
import Actions from '../../Actions';

const PromotionDashboard = () => {
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
              Class Promotion
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
              Class Promotion
            </li>
          </ul>

          <div className='container bg-light mt-5 mb-5' style={{ height: "50px" }}>
            <div className='mt-3'>
              LAST PROMOTION: x
            </div>            
          </div>
          <div className='container bg-light mt-5 mb-5' style={{ height: "50px" }}>
            <div className='mt-3'>
              CURRENT PROMOTION: 2018/2019 Third Term
            {/* </div> */}
            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"> */}
              <button className="btn btn-success me-md-2" style={{ marginLeft: "675px" }} type="button">Run Promotion</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionDashboard;
