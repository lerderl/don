import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import NewStudentDashboard from "./NewStudentDashboard";

const NewStudent = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <NewStudentDashboard />
      <Footer />
    </div>
  );
};

export default NewStudent;
