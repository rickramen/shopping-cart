function Shop({ products, addToCart }) {
  return (
    <div>
      <h2>Shop</h2>

      {products.map(product => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;