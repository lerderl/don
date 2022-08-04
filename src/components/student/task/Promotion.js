import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import PromotionDashboard from "./PromotionDashboard";

const Promotion = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <PromotionDashboard />
      <Footer />
    </div>
  );
};

export default Promotion;
