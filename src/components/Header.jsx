import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider";

export const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout done!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand h1" to={"/"}>
          MPA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            {user && <span className="me-3">{user.email}</span>}
            {user ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <Link className="nav-link" to={"/login"}>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-2"
                  >
                    Login
                  </button>
                </Link>
                <Link className="nav-link" to={"/register"}>
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
