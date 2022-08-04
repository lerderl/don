import Footer from '../../../Footer';
import Header from '../../../Header';
import Sidebar from '../../../Sidebar';
import ClassFeesDashboard from './ClassFeesDashboard';

const ClassFees = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <ClassFeesDashboard />
      <Footer />
    </div>
  );
};

export default ClassFees;
