import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  products: [],
  product: null,
  loading: true,
  error: null,
};

const ProductContext = createContext(initialState);

const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_PRODUCT_FAILURE":
      return {
        ...state,
        product: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data.products });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
      });
  }, []);

  const fetchProductById = (id) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCT_FAILURE", payload: error.message });
      });
  };

  return (
    <ProductContext.Provider value={{ state, fetchProductById }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
