import { useState } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Pants", price: 40 },
    { id: 3, name: "Shoes", price: 60 }
  ];

  function addToCart(product) {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // Cart functions
  function increaseQuantity(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
    );
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      <Shop products={products} addToCart={addToCart} />

      <Cart 
        cart={cart} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
        removeFromCart={removeFromCart} 
      />
    </div>
  );
}

export default App;