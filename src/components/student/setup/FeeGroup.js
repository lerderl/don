import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import FeeGroupDashboard from "./FeeGroupDashboard";

const FeeGroup = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <FeeGroupDashboard />
      <Footer />
    </div>
  );
};

export default FeeGroup;
