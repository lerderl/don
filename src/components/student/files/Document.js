import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import DocumentDashboard from "./DocumentDashboard";

const Document = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <DocumentDashboard />
      <Footer />
    </div>
  );
};

export default Document;
