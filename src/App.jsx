import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

const handleRemoveFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove));
};

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#0f172a" }}>
        Teknolojik Market
      </h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1 }}>
          <ProductList onAddToCart={handleAddToCart} />
        </div>

        <div style={{ flex: 1 }}>
          <CartSummary
            cartItems={cart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
};

export default App;