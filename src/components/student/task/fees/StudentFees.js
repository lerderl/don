import Footer from '../../../Footer';
import Header from '../../../Header';
import Sidebar from '../../../Sidebar';
import StudentFeesDashboard from './StudentFeesDashboard';

const StudentFees = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <StudentFeesDashboard />
      <Footer />
    </div>
  );
};

export default StudentFees;
