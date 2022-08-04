import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import StudentChangeDashboard from "./StudentChangeDashboard";

const StudentChange = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <StudentChangeDashboard />
      <Footer />
    </div>
  );
};

export default StudentChange;
