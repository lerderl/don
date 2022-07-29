import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import DepartmentDashboard from "./DepartmentDashboard";

const Department = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <DepartmentDashboard />
      <Footer />
    </div>
  );
};

export default Department;
