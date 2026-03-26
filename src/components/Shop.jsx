import "./Shop.css";

function Shop({ products, addToCart }) {
  return (
    <div>
      <h2>Shop</h2>

      <div className="shop-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />

            <p className="product-title">{product.title}</p>

            <p className="product-price">
              ${product.price.toFixed(2)}
            </p>

            <button
              className="add-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;