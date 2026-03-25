function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart, setQuantity }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>

               <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: "60px", marginRight: "1rem" }}
                />

                <p>{item.title} - ${item.price} x {item.quantity}</p>

              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (!isNaN(value) && value > 0) {
                    setQuantity(item.id, value);
                  }
                }}
                style={{ width: "50px", margin: "0 0.5rem" }}
              />

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