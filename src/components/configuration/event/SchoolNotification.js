import Header from "../../Header";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";
import SchoolNotificationDashboard from "./SchoolNotificationDashboard";

const SchoolNotification = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <SchoolNotificationDashboard />
      <Footer />
    </div>
  );
};

export default SchoolNotification;
