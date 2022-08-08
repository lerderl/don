import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import HostelSetupDashboard from "./HostelSetupDashboard";

const HostelSetup = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <HostelSetupDashboard />
      <Footer />
    </div>
  );
};

export default HostelSetup;
