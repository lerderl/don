import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ExistingDashboard from "./ExistingDashboard";

const Existing = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ExistingDashboard />
      <Footer />
    </div>
  );
};

export default Existing;
