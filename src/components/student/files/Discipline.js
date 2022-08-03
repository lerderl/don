import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import DisciplineDashboard from "./DisciplineDashboard";

const Discipline = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <DisciplineDashboard />
      <Footer />
    </div>
  );
};

export default Discipline;
