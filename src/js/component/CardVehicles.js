import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = ({ name, modelo, claseVehiculo, pasajeros, id, img }) => {

  const{store, actions} = useContext(Context);

  return (
    <>
      <div className="card me-5 mb-3 border-3 border-warning">
        <img
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title fw-bolder"> {name} </h5>
          <p className="card-text"><span className="fw-bolder">Modelo:</span> {modelo} </p>
          <p className="card-text"><span className="fw-bolder">lase de Vehiculo:</span> {claseVehiculo} </p>
          <p className="card-text"><span className="fw-bolder">Pasajeros:</span> {pasajeros} </p>
          <div className="d-flex justify-content-between">
            <Link
              to={"/vehicle/" + id}
              className="btn btn-outline border-success border-3 text-success fw-bolder"
            >
              Saber Mas!
            </Link>
            <button
              className="btn btn-outline border-warning border-3 text-warning"
              onClick={() => actions.addFavourites(name, id, "vehiculo")}
            >
              <i className={`${store.favoritoVehiculo[id] ? " fw-bolder" : " "} far fa-heart`}> </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVehicles;
