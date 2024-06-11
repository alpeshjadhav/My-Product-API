import React, { useContext } from "react";
import { ProductPageHeading } from "./ProductPageHeading";
import { ProductCard } from "./ProductCard";
import ProductContext from "../store/ProductContext";

export const Products = () => {
  const { state } = useContext(ProductContext);
  const { products, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="container">
        <ProductPageHeading />
        <div className="row g-5">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
