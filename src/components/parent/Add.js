import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import AddDashoard from "./AddDashboard";

const Add = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <AddDashoard />
      <Footer />
    </div>
  );
};

export default Add;
