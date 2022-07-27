import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import LessonPlanDashboard from "./LessonPlanDashboard";

const LessonPlan = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <LessonPlanDashboard />
      <Footer />
    </div>
  );
};

export default LessonPlan;
