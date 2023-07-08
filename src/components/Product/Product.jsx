import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, quantity, price, ratings, id } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product)}
      >
        Add to Cart <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
