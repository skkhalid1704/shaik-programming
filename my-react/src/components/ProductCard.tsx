import { useRef } from "react";
import type { ProductProps } from "../beans/Product";
import "../css/ProductCard.css";
import "../css/ProductPage.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: ProductProps) => {
  const qtyRef = useRef<HTMLInputElement>(null);
  const getImageUrl = (url: string) =>
    url?.startsWith("http")
      ? url
      : "https://via.placeholder.com/400x300?text=No+Image";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  const handleAddToCart = () => {
    const qty = parseInt(qtyRef.current?.value || "1", 10);
    console.log("Add to cart:", product.id, "Quantity:", qty);
  };
  return (
    <div className="product-card">
      <img
        src={getImageUrl(product.imageUrl)}
        alt={product.name}
        className="product-image"
      />

      <div className="product-details">
        <div className="product-title mb-0">
          <div
            onClick={handleClick}
            className="product-link"
            style={{ cursor: "pointer" }}
          >
            {product.name}
          </div>
        </div>
        <div className="text-muted">#{product.id}</div>
        <div className="product-price">₹{product.price}</div>
        <div style={{ flexGrow: 1 }}></div>{" "}
        <div className="product-actions">
          <p>
            Qty:{" "}
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="quantity-input"
              ref={qtyRef}
            />
          </p>
        </div>
      </div>
      <button className="btn btn-vermilion btn-block" onClick={handleAddToCart}>
        <strong>Add to Cart</strong>
      </button>
    </div>
  );
};

export default ProductCard;
