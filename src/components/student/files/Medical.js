import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import MedicalDashboard from "./MedicalDashboard";

const Medical = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <MedicalDashboard />
      <Footer />
    </div>
  );
};

export default Medical;
