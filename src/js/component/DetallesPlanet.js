import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetallesPlanet = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  return (
    <>
      <div className="row mb-5">
        <div className="col-12 col-lg-6 text-center">
          <img
            className="imagen"
            src={store.imagenesPlanetas[theid]?.url}
            alt="imagen"
          />
        </div>
        <div className="col-12 col-lg-6 text-center text-white">
          <h1>{store.planetas[theid]?.name} </h1>
          <p>{store.imagenesPlanetas[theid]?.descripcion}</p>
        </div>
      </div>

      <div className="lineaSeparadora bg-warning mt-4 mb-4"> </div>

      <div className="row text-center text-warning fw-bolder">
        <div className="col-2 r">
          <p className="fw-bolder"> Nombre </p>
          <p className="fw-bolder"> {store.planetas[theid]?.name} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Clima </p>
          <p className="fw-bolder"> {store.planetas[theid]?.climate} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Poblacion </p>
          <p className="fw-bolder"> {store.planetas[theid]?.population}</p>
        </div>
        <div className="col-2">
          <p className=" fw-bolder"> P. Orbital</p>
          <p className="fw-bolder">{store.planetas[theid]?.orbital_period} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> P. Rotacion</p>
          <p className="fw-bolder">
            {" "}
            {store.planetas[theid]?.rotation_period}{" "}
          </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Diametro </p>
          <p className="fw-bolder"> {store.planetas[theid]?.diameter} </p>
        </div>
      </div>
    </>
  );
};

export default DetallesPlanet;
