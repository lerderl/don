import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SubjectDashboard from "./SubjectDashboard";

const Subject = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <SubjectDashboard />
      <Footer />
    </div>
  );
};

export default Subject;
