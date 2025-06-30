import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productAPI";
import type { Product } from "../beans/Product";
import { useAuth } from "../context/AuthContext";
import "../css/ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  console.log("ProductPage: Parameters: ", productId);
  const [product, setProduct] = useState<Product | null>(null);
  const { user } = useAuth();
  const currencySymbolMap: Record<string, string> = {
    INR: "₹",
    USD: "$",
  };
  console.log("Currency for user is ", user.currencyCode);
  const currencySymbol = currencySymbolMap[user.currencyCode || "USD"];
  const dimensionSplit = product?.shippingDimensions?.split("x") || [];
  const dimension = {
    height: dimensionSplit[0] || "0",
    width: dimensionSplit[1] || "0",
    depth: dimensionSplit[2] || "0",
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await getProductById(productId || "");
        setProduct(responseData);
      } catch (error) {
        console.error("ProductPage failed", error);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <>
      {product?.id === "" && <h1>No product selected</h1>}
      {product?.id === "" && <h1>404 Product Not Found</h1>}
      {product && product?.id !== "" && (
        <div className="product-page">
          <div className="product-image-wrapper">
            <img
              src={
                product.imageUrl ||
                "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              }
              alt={product.name}
              className="product-full-image"
            />
          </div>

          <div className="product-details-full">
            <div className="product-title">{product.name}</div>
            <h3 className="price">
              {currencySymbol}
              {product.price}
            </h3>
            <h3 className="availability">
              Item Availability: {product.availability}
            </h3>
            <p>
              Qty:{" "}
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="quantity-input"
              />
            </p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      )}
      {product && (
        <div className="product-meta-card">
          <h3 className="meta-heading">Product Details</h3>
          <div className="meta-grid">
            <div className="meta-item">
              <strong>Item Number:</strong> {productId}
            </div>
            <div className="meta-item">
              <strong>Product Type:</strong> {product.type}
            </div>
          </div>

          <h4 className="meta-heading">Shipping Details</h4>
          <div className="meta-grid">
            <div className="meta-item">
              <strong>Shipping Type:</strong> {product.shippingType}
            </div>
          </div>

          <div className="meta-item">
            <strong>Shipping Dimensions::</strong>
            <p>
              <strong>Height: </strong> {dimension.height}
              <strong> Width: </strong> {dimension.width}
              <strong> Depth: </strong> {dimension.depth}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductPage;
