import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ClassDashboard from "./ClassDashboard";

const ClassTimetable = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ClassDashboard />
      <Footer />
    </div>
  );
};

export default ClassTimetable;
