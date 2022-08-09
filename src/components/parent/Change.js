import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ChangeDashboard from "./ChangeDashboard";

const Change = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ChangeDashboard />
      <Footer />
    </div>
  );
};

export default Change;
