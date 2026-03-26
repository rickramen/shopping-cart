import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">FakeShop</Link>

        <div className="nav-links">
          <Link to="/shop" className="nav-link">Store</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart ({totalItems})
          </Link>
        </div>
      </div>
  </nav>
  );
}

export default Navbar;