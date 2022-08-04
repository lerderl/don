import Footer from '../../../Footer';
import Header from '../../../Header';
import Sidebar from '../../../Sidebar';
import TransactionDashboard from './TransactionDashboard';

const Transaction = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <TransactionDashboard />
      <Footer />
    </div>
  );
};

export default Transaction;
