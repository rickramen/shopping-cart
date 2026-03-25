import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1>Clothes Shop</h1>
        </Link>

        <div>
            <Link to="/shop">Store</Link>
            <Link to="/cart" style={{ marginLeft: "1rem" }}>
            Cart ({totalItems})
            </Link>
        </div>
    </nav>
  );
}

export default Navbar;