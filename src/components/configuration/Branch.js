import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import BranchDashboard from "./BranchDashboard";

const Branch = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <BranchDashboard />
      <Footer />
    </div>
  );
};

export default Branch;
