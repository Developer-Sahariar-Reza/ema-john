import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: <span>${price}</span>
        </p>
        <p>
          Order Quantity: <span>{quantity}</span>
        </p>
      </div>
      <button className="btn-delete">
        <FontAwesomeIcon icon={faTrashAlt} className="delete-icon" />
      </button>
    </div>
  );
};

export default ReviewItem;
