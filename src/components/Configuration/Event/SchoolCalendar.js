import Header from "../../Header";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";
import SchoolCalendarDashboard from "./SchoolCalendarDashboard";

const SchoolCalendar = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <SchoolCalendarDashboard />
      <Footer />
    </div>
  );
};

export default SchoolCalendar;
