import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light mb-4">
        <div className="container">
          <Link to="/">
            <img
              className="titulo"
              src="https://3.bp.blogspot.com/-ynpUop8xVZE/UGmHfbAp76I/AAAAAAAAAn8/ed1wBRPFI7U/w1200-h630-p-k-no-nu/star-wars-logo.jpg"
            />
          </Link>

          <div class="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favourites
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
