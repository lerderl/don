import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import AddStudentDashboard from "./AddStudentDashboard";

const AddStudent = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <AddStudentDashboard />
      <Footer />
    </div>
  );
};

export default AddStudent;
