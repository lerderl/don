import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import VocationDashboard from "./VocationDashboard";

const Vocation = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <VocationDashboard />
      <Footer />
    </div>
  );
};

export default Vocation;
