import React, { useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./products.css";
const Products = ({ setOpen, data }) => {
  const [favItems, setFavItems] = useState([]);

  return (
    <>
      <div className="header">
        <div className="buttonWrapper">
          <button onClick={() => setOpen(true)}>Send product proposal</button>
        </div>
        <div className="statsContainer">
          <span>
            Total products: {data.length} - Number of favorites:{" "}
            {favItems.length}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <ProductCard
            item={item}
            favItems={favItems}
            setFavItems={setFavItems}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
