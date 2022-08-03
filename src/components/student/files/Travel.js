import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import TravelDashboard from "./TravelDashboard";

const Travel = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <TravelDashboard />
      <Footer />
    </div>
  );
};

export default Travel;
