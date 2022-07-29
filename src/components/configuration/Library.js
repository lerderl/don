import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import LibraryDashboard from "./LibraryDashboard";

const Library = () => {
  return (
    <div className="container">
      <Header/>
      <Sidebar />
      <LibraryDashboard />
      <Footer />
    </div>
  );
};

export default Library;
