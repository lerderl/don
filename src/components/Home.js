import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Home;
