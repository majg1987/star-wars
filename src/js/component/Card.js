import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="card" style={{ minWidth: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycN1y9R0MhB1LuhER8D7RFJVPUtf5jVW3KxdTGnanBhBysAs9ObtpaiZ5RYCmBDfdvok&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={"/demo"} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
