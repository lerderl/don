import Header from "../../Header";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";
import SportDashboard from "./SportDashboard";

const Sport = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <SportDashboard />
      <Footer />
    </div>
  );
};

export default Sport;
