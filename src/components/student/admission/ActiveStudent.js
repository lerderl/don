import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ActiveStudentDashboard from "./ActiveStudentDashboard";

const ActiveStudent = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ActiveStudentDashboard />
      <Footer />
    </div>
  );
};

export default ActiveStudent;
