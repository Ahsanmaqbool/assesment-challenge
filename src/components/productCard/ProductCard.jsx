import React from "react";
import { FaStar } from "react-icons/fa";
import "./productcard.css";

const ProductCard = ({ item, favItems, setFavItems }) => {
  const handleAddtoFav = (title) => {
    if (favItems.includes(title))
      setFavItems(favItems.filter((item) => item !== title));
    else setFavItems((prev) => [...prev, title]);
  };
  return (
    <div className="product-card">
      <img src={item.image} alt={item.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{item.title}</h2>
        <p>
          <FaStar color="#f5a623" style={{ marginRight: 2 }} />
          <strong>Rating: {item.rating?.rate}/5</strong>
        </p>
        <p>
          <b>Price: ${item.price}</b>
        </p>
        <b>Description:</b>
        <p className="productBody">
          {item.description}
          <br />
        </p>
        <span className="action-bar">
          <span
            className={
              favItems.includes(item.title) ? "actionBarItem" : "actionBarItem2"
            }
            role="button"
          >
            <FaStar />
            <span
              className="actionBarItemLabel"
              onClick={() => handleAddtoFav(item.title)}
            >
              {favItems.includes(item.title)
                ? "Remove from favourites"
                : "Add to favourites"}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
