import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to FakeShop</h1>

      <p>Browse our collection of cool products.</p>

      <Link to="/shop">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Visit Store
        </button>
      </Link>
    </div>
  );
}

export default Home;