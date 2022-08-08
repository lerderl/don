import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import FeeSetupDashboard from "./FeeSetupDashboard";

const FeeSetup = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <FeeSetupDashboard />
      <Footer />
    </div>
  );
};

export default FeeSetup;
