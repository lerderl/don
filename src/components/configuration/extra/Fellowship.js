import Header from "../../Header";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";
import FellowshipDashboard from "./FellowshipDashboard";

const Fellowship = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <FellowshipDashboard />
      <Footer />
    </div>
  );
};

export default Fellowship;
