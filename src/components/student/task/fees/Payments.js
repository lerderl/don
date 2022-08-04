import Footer from '../../../Footer';
import Header from '../../../Header';
import Sidebar from '../../../Sidebar';
import PaymentsDashboard from './PaymentsDashboard';

const Payments = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <PaymentsDashboard />
      <Footer />
    </div>
  );
};

export default Payments;
