// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './PaymentsOptionsCardTip.css';

interface PaymentsOptionsCardTipType {
  children?: React.ReactNode;
}

function PaymentsOptionsCardTip({ children }: PaymentsOptionsCardTipType) {
  return <div className="content">{children}</div>;
}

export default PaymentsOptionsCardTip;
