import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import PositionDashboard from "./PositionDashboard";

const Position = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <PositionDashboard />
      <Footer />
    </div>
  );
};

export default Position;
