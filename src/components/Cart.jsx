function Cart({ cart }) {
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
            <div key={item.id}>
              <p>
                {item.name} - ${item.price} x {item.quantity}
              </p>
            </div>
          ))}

          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;