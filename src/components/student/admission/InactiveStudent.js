import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import InactiveStudentDashboard from "./InactiveStudentDashboard";

const InactiveStudent = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <InactiveStudentDashboard />
      <Footer />
    </div>
  );
};

export default InactiveStudent;
