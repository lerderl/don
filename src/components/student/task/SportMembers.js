import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import SportMembersDashboard from "./SportMembersDashboard";

const SportMembers = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <SportMembersDashboard />
      <Footer />
    </div>
  );
};

export default SportMembers;
