import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import InactiveEmployeesDashboard from "./InactiveEmployeesDashboard";

const InactiveEmployees = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <InactiveEmployeesDashboard />
      <Footer />
    </div>
  );
};

export default InactiveEmployees;
