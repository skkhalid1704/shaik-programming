import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../css/HomePage.css";
import { getAllProducts } from "../api/productAPI";
import type { Product } from "../beans/Product";

const HomePage = () => {
  const [responseData, setResponseData] = useState<Product[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const response = await getAllProducts();
        setResponseData(response);
      } catch (error) {
        console.error("HomeAPI failed:", error);
        setResponseData([]);
      } finally {
        setLoading(false);
      }
    };

    onLoad();
  }, []);

  return (
    <>
      {!loading && (
        <div className="home-container">
          <div className="home-interface">
            {responseData?.map((card) => (
              <ProductCard key={card.id} product={card} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
