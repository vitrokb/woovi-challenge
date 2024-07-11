import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PaymentMethods } from './pages/PaymentMethods';
import { ThemeProvider } from '@mui/material';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/" element={<PaymentMethods />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
