import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar text-center">
      <h4 className="text-uppercase fw-bold">Collections</h4>
      <hr />
      <div className="list-group">
        <Link to={"/"} className="list-group-item list-group-item-action">
          Home
        </Link>
      </div>
    </div>
  );
};
