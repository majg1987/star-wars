import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = ({ name, modelo, claseVehiculo, pasajeros, id }) => {

  const{actions} = useContext(Context);

  return (
    <>
      <div className="card me-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycN1y9R0MhB1LuhER8D7RFJVPUtf5jVW3KxdTGnanBhBysAs9ObtpaiZ5RYCmBDfdvok&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text"> Modelo: {modelo} </p>
          <p className="card-text"> Clase de Vehiculo: {claseVehiculo} </p>
          <p className="card-text"> Pasajeros: {pasajeros} </p>
          <div className="d-flex justify-content-between">
            <Link
              to={"/vehicle/" + id}
              className="btn btn-outline border-primary text-primary"
            >
              Saber Mas!
            </Link>
            <button
              className="btn btn-outline border-warning text-warning"
              onClick={() => actions.addFavourites(name)}
            >
              <i className="far fa-heart"> </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVehicles;
