import Header from "../Header";
import Actions from "../../Actions";

const BehaviourDashboard = () => {
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
              Files
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Student Behaviour
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
              Student Behaviour
            </li>
          </ul>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputStudent" className="form-label visually-hidden">Student</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Student</option>
                <option value="1">GBADE SEGUN - 0003</option>
                <option value="2">FIRSTJOHN JOSH - 0006</option>
                <option value="3">FIRSTJOHN JUDE - 0008</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputAdjustment" className="form-label visually-hidden">Adjustment in School</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Adjustment in School</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputSportAndGames" className="form-label visually-hidden">Sport and Games</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Sport and Games</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputDevelopment" className="form-label visually-hidden">Personal Development</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Personal Development</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputRelationship" className="form-label visually-hidden">Relationship with Teachers</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Relationship with Teachers</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputHandling" className="form-label visually-hidden">Handling Tools</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Handling Tools</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-2">
            <div className="col-12">
              <label for="inputMental" className="form-label visually-hidden">Mental Alertness</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Mental Alertness</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputWriting" className="form-label visually-hidden">Hand Writing</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Hand Writing</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputSkills" className="form-label visually-hidden">Musical Skils</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Musical Skills</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </form>

          <form className="row row-cols-lg-auto g-3 align-items-center mt-0 mb-4">
            <div className="col-12">
              <label for="inputHabits" className="form-label visually-hidden">General Attitude and Habits</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>General Attitude and Habits</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <label for="inputVerbal" className="form-label visually-hidden">Verbal Fluency</label>
              <select className="form-select" style={{ height: "36px", width: "150px" }} id="autoSizingSelect">
                <option selected>Verbal Fluency</option>
                <option value="1">Unsatisfactory</option>
                <option value="2">Satisfactory</option>
                <option value="3">Average</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-light">
                Cancel
              </button>
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

export default BehaviourDashboard;
