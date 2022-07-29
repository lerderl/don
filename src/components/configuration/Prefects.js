import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import PrefectsDashboard from "./PrefectsDashboard";

const Prefects = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <PrefectsDashboard />
      <Footer />
    </div>
  );
};

export default Prefects;
