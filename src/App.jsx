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
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  return (
    <div>
      <h1>Shop</h1>

      <Shop products={products} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  );
}

export default App;