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

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  }

  const setQuantity = (id, newQuantity) => {
    const MIN = 1;
    const MAX = 10; 

    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id !== id) return item;

        // restrict quantity within max limit range
        const clampedQuantity = Math.max(MIN, Math.min(MAX, newQuantity));

        return { ...item, quantity: clampedQuantity };
      })
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

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
                setQuantity={setQuantity}
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