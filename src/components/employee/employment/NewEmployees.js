import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import NewEmployeesDashboard from "./NewEmployeesDashboard";

const NewEmployees = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <NewEmployeesDashboard />
      <Footer />
    </div>
  );
};

export default NewEmployees;
