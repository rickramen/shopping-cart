function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>
              <p>{item.title} - ${item.price} x {item.quantity}</p>

              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span style={{ margin: "0 0.5rem" }}>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>

              <button 
                onClick={() => removeFromCart(item.id)} 
                style={{ marginLeft: "1rem" }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;