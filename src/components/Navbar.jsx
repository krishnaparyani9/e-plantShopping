import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

export default function Navbar() {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🌿 Paradise Nursery
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Plants</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <span aria-hidden="true">🛒</span>
              Cart <span className="cart-count">{cartQuantity}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
