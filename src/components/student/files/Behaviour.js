import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import BehaviourDashboard from "./BehaviourDashboard";

const Behaviour = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <BehaviourDashboard />
      <Footer />
    </div>
  );
};

export default Behaviour;
