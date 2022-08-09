import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import EmployeeAppraisalDashboard from "./EmployeeAppraisalDashboard";

const EmployeeAppraisal = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <EmployeeAppraisalDashboard />
      <Footer />
    </div>
  );
};

export default EmployeeAppraisal;
