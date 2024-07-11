import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PaymentMethods } from './pages/payment-methods';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/" element={<PaymentMethods />} />
      </Routes>
    </Router>
  );
}

export default App;
