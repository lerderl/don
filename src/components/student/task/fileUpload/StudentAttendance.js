import Footer from '../../../Footer';
import Header from '../../../Header';
import Sidebar from '../../../Sidebar';
import AttendanceDashboard from './AttendanceDashboard';

const StudentAttendance = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <AttendanceDashboard />
      <Footer />
    </div>
  );
};

export default StudentAttendance;
