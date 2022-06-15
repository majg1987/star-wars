import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-light pt-3 mb-4">
        <div className="container">
          <Link to="/">
            <img
              className="titulo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
            />
          </Link>

          <div className="dropdown">
            <button
              className="btn btn-warning text-white fs-bolder dropdown-toggle dropdown"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favourites
              <span className="bg-success text-white mx-2 px-2 rounded">
                {store.favoritos.length}
              </span>
            </button>
            <ul
              className="dropdown-menu text-center bg-warning text-white"
              aria-labelledby="dropdownMenuButton1"
            >
              {store.favoritos.length < 1 ? <li>No hay elementos en favoritos</li> :
              store.favoritos.map((item, index) => (
                <li key={index} className="d-flex justify-content-between mx-2 mb-2">
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
