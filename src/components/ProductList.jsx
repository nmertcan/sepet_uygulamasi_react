import React from "react";

const ProductList = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: "Kablosuz Kulaklık" },
    { id: 2, name: "Oyuncu Mouse" },
    { id: 3, name: "Mekanik Klavye" },
  ];

  return (
    <div
      style={{
        border: "1px solid #cbd5e1",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>Ürün Kataloğu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{product.name}</span>

            <button onClick={() => onAddToCart(product)}>
              Sepete Ekle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;