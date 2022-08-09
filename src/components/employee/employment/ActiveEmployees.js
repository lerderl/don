import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ActiveEmployeesDashboard from "./ActiveEmployeesDashboard";

const ActiveEmployees = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ActiveEmployeesDashboard />
      <Footer />
    </div>
  );
};

export default ActiveEmployees;
