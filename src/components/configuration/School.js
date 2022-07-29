import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SchoolDashboard from "./SchoolDashboard";

const School = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <SchoolDashboard />
      <Footer />
    </div>
  );
};

export default School;
