import React from "react";
import { Link } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  return (
    <>
      <div className={`${styles.product_card}  card`}>
        <img
          src={product.thumbnail}
          alt={product.thumbnail}
          className={`${styles.product_img}  card-img-top`}
        />
        <div className="card-body">
          <h5 className={`${styles.product_title}  card-title`}>
            {product.title}
          </h5>
          <p className={`${styles.product_text}  card-text`}>
            {product.description}
          </p>
          <Link
            to={`/product/${product.id}`}
            className={`${styles.product_button}  btn btn-outline-light`}
          >
            <GrFormView /> View..
          </Link>
        </div>
      </div>
    </>
  );
};
