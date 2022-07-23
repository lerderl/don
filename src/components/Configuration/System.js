import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SystemDashboard from "./SystemDashboard";

const System = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <SystemDashboard />
      <Footer />
    </div>
  );
};

export default System;
