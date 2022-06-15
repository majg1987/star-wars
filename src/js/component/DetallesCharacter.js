import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const DetallesCharacter = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  return (
    <>
      <div className="row mb-5">
        <div className="col-12 col-lg-6 text-center">
          <img
            className="imagen"
            src={store.imagenesPersonajes[theid]?.url}
            alt="imagen 800x600"
          />
        </div>
        <div className="col-12 col-lg-6 text-center text-white">
          <h1>{store.personajes[theid]?.name}</h1>
          <p>{store.imagenesPersonajes[theid]?.descripcion}</p>
        </div>
      </div>

      <div className="lineaSeparadora bg-warning mt-4 mb-4"> </div>

      <div className="row text-center  text-warning fw-bolder">
        <div className="col-2 r">
          <p className="fw-bolder"> Nombre </p>
          <p className="fw-bolder"> {store.personajes[theid]?.name} </p>
        </div>
        <div className="col-2">
          <p className=" fw-bolder"> Año Nacimiento</p>
          <p className="fw-bolder"> {store.personajes[theid]?.birth_year} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Genero </p>
          <p className="fw-bolder"> {store.personajes[theid]?.gender} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Altura </p>
          <p className="fw-bolder"> {store.personajes[theid]?.height} </p>
        </div>
        <div className="col-2">
          <p className=" fw-bolder"> Color de Piel</p>
          <p className="fw-bolder"> {store.personajes[theid]?.skin_color} </p>
        </div>
        <div className="col-2">
          <p className=" fw-bolder"> Color de Ojos</p>
          <p className="fw-bolder"> {store.personajes[theid]?.eye_color} </p>
        </div>
      </div>
    </>
  );
};

export default DetallesCharacter;
