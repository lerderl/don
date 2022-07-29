import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import AcademicYearDashboard from "./AcademicYearDashboard";

const AcademicYear = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <AcademicYearDashboard />
      <Footer />
    </div>
  );
};

export default AcademicYear;
