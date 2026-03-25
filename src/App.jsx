import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

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

  function increaseQuantity(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(prev =>
      prev.map(item =>
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
    <BrowserRouter>
      <Navbar cart={cart} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          {/* Home page */}
            <Route path="/" element={<Home />} />

          {/* Shop page */}
          <Route
            path="/shop"
            element={
              <Shop products={products} addToCart={addToCart} />
            }
          />

          {/* Cart page */}
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;