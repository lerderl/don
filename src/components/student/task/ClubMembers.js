import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ClubMembersDashboard from "./ClubMembersDashboard";

const ClubMembers = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ClubMembersDashboard />
      <Footer />
    </div>
  );
};

export default ClubMembers;
