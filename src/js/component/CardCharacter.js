import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacter = ({ name, gender, hairColor, eyeColor, id, img }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card me-5">
        <img
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {name} </h5>
          <p className="card-text"> Genero: {gender} </p>
          <p className="card-text"> Color de Pelo: {hairColor} </p>
          <p className="card-text"> Color de Ojos: {eyeColor} </p>
          <div className="d-flex justify-content-between">
            <Link
              to={"/character/" + id}
              className="btn btn-outline border-primary text-primary"
            >
              Saber Mas!
            </Link>
            <button
              className="btn btn-outline border-warning text-warning"
              onClick={()=>actions.addFavourites(name)}
            >
              <i className="far fa-heart"> </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCharacter;
