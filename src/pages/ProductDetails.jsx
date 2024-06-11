import React, { useContext, useEffect } from "react";
import ProductContext from "../store/ProductContext";
import { useParams } from "react-router-dom";
import { IoIosBasket } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { Rate } from "../components/Rate";

export const ProductDetails = () => {
  const { id } = useParams();

  const { state, fetchProductById } = useContext(ProductContext);
  const { product, loading, error } = state;

  useEffect(() => {
    fetchProductById(id);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <>
      <div className="container">
        <div className="card m-5 p-5">
          <div className="row g-5">
            <div className="col-md-4">
              <img
                src={product.thumbnail}
                alt={product.thumbnail}
                className="card-img-top"
              />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <Rate rating={product.rating}></Rate>
                <p>{product.category}</p>
                <p>{product.brand}</p>
                <div>
                  <div className="btn btn-outline-info me-1">
                    <IoIosBasket /> Add to Cart
                  </div>
                  <div className="btn btn-outline-info">
                    <BiSolidPurchaseTag /> Buy Now
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h3>${product.price}</h3>
                <p>Discount up to {product.discountPercentage}% off</p>
                <p>Available {product.stock}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
