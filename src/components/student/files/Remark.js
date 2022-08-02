import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import RemarkDashboard from "./RemarkDashboard";

const Remark = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <RemarkDashboard />
      <Footer />
    </div>
  );
};

export default Remark;
