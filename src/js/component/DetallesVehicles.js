import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetallesVehicles = () => {
  const { store } = useContext(Context);
  const { theid } = useParams();

  return (
    <>
      <div className="row mb-5">
        <div className="col-12 col-lg-6 text-center">
          <img
            className="imagen"
            src={store.imagenesVehiculos[theid]?.url}
            alt="imagen"
          />
        </div>
        <div className="col-12 col-lg-6 text-center text-white">
          <h1> {store.vehiculos[theid]?.name} </h1>
          <p>{store.imagenesVehiculos[theid]?.descripcion}</p>
        </div>
      </div>

      <div className="lineaSeparadora bg-warning mt-4 mb-4"> </div>

      <div className="row text-center  text-warning fw-bolder">
        <div className="col-2 r">
          <p className="fw-bolder"> Nombre </p>
          <p> {store.vehiculos[theid]?.name} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Modelo</p>
          <p> {store.vehiculos[theid]?.model} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Tipo de Vehiculo </p>
          <p> {store.vehiculos[theid]?.vehicle_class} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Pasajeros </p>
          <p> {store.vehiculos[theid]?.passengers} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Max. Velocidad </p>
          <p> {store.vehiculos[theid]?.max_atmosphering_speed} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Consumibles </p>
          <p> {store.vehiculos[theid]?.consumables} </p>
        </div>
      </div>
    </>
  );
};

export default DetallesVehicles;
