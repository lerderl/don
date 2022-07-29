import Header from "../../Header";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";
import ClubDashboard from "./ClubDashboard";

const Club = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ClubDashboard />
      <Footer />
    </div>
  );
};

export default Club;
