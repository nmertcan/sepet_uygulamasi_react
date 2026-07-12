import React from "react";

const CartSummary = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div
      style={{
        border: "1px solid #0284c7",
        padding: "15px",
        backgroundColor: "#f0f9ff",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ color: "#0369a1" }}>Alışveriş Sepetiniz</h3>

      <p>
        Toplam Ürün: <strong>{cartItems.length}</strong>
      </p>

      {cartItems.length === 0 ? (
        <p>Sepetiniz henüz boş.</p>
      ) : (
        <ul style={{ paddingLeft: "20px" }}>
  {cartItems.map((item, index) => (
    <li key={index}>
      {item.name}

      <button
        onClick={() => onRemoveFromCart(index)}
        style={{ marginLeft: "10px" }}
      >
        Sil
      </button>
    </li>
  ))}
</ul>
      )}
    </div>
  );
};

export default CartSummary;