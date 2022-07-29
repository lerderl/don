import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import SchemeOfWorkDashboard from "./SchemeOfWorkDashboard";

const SchemeOfWork = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <SchemeOfWorkDashboard />
      <Footer />
    </div>
  );
};

export default SchemeOfWork;
