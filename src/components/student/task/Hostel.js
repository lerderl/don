import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import HostelDashboard from "./HostelDashboard";

const Hostel = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <HostelDashboard />
      <Footer />
    </div>
  );
};

export default Hostel;
