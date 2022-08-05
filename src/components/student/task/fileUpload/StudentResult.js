import Footer from '../../../Footer';
import Header from '../../../Header';
import Sidebar from '../../../Sidebar';
import ResultDashboard from './ResultDashboard';

const StudentResult = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ResultDashboard />
      <Footer />
    </div>
  );
};

export default StudentResult;
