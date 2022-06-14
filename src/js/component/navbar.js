import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

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

          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favourites
              <span className="bg-danger mx-2 px-2 rounded">
                {store.favoritos.length}
              </span>
            </button>
            <ul
              className="dropdown-menu text-center text-primary"
              aria-labelledby="dropdownMenuButton1"
            >
              {store.favoritos.map((item, index) => (
                <li key={index} className="d-flex justify-content-around mb-2">
                  {item}
                  <button className="btn btn-danger text-white rounded px-1 py-0 " onClick={()=>actions.deleteFavourites(item)}>
                    <i className="far fa-trash-alt "></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
