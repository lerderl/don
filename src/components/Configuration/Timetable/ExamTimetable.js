import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ExamDashboard from "./ExamDashboard";

const ExamTimetable = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ExamDashboard />
      <Footer />
    </div>
  );
};

export default ExamTimetable;
