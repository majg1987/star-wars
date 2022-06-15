import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacter = ({ name, gender, hairColor, eyeColor, id, img }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card me-5 border-warning border-3">
        <img
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title fw-bolder"> {name} </h5>
          <p className="card-text"><span className="fw-bolder">Genero:</span>  {gender} </p>
          <p className="card-text"><span className="fw-bolder">Color de Pelo:</span>  {hairColor} </p>
          <p className="card-text"><span className="fw-bolder">Color de Ojos:</span>  {eyeColor} </p>
          <div className="d-flex justify-content-between">
            <Link
              to={"/character/" + id}
              className="btn btn-outline border-success border-3 text-success fw-bolder"
            >
              Saber Mas!
            </Link>
            <button
              className="btn btn-outline border-warning border-3 text-warning"
              onClick={()=>actions.addFavourites(name, id, "personaje")}
            >
              <i className={`${store.favoritoPersonaje[id] ? " fw-bolder" : " "} far fa-heart`}> </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCharacter;
