import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import BooklistDashboard from "./BooklistDashboard";

const Booklist = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <BooklistDashboard />
      <Footer />
    </div>
  );
};

export default Booklist;
