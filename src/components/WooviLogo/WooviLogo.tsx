import { Link } from 'react-router-dom';
import WooviLogoSvg from '../../assets/woovi-logo.svg';
import './WoovitLogo.css';

function WooviLogo() {
  return (
    <Link to="/payment-methods">
      <img className="logo" src={WooviLogoSvg} alt="Woovi Logo" />;
    </Link>
  );
}

export default WooviLogo;
