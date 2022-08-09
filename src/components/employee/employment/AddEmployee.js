import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import AddEmployeeDashboard from "./AddEmployeeDashboard";

const AddEmployee = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <AddEmployeeDashboard />
      <Footer />
    </div>
  );
};

export default AddEmployee;
