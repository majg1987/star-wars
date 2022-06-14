import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = ({ name, population, terrain, id }) => {

  const {actions} = useContext(Context);
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
          <p className="card-text"> Poblacion: {population}</p>
          <p className="card-text"> Terreno: {terrain} </p>
          <div className="d-flex justify-content-between">
            <Link
              to={"/planet/" + id}
              className="btn btn-outline border-primary text-primary"
            >
              Learn More!
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

export default CardPlanets;
