import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="card me-5" style={{ minWidth: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycN1y9R0MhB1LuhER8D7RFJVPUtf5jVW3KxdTGnanBhBysAs9ObtpaiZ5RYCmBDfdvok&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Gender:</p>
          <p className="card-text">Hair Color:</p>
          <p className="card-text">Eye Color:</p>
          <div className="d-flex justify-content-between">
            <Link to={"/demo"} className="btn btn-outline border-primary text-primary">
              Learn More!
            </Link>
            <button className="btn btn-outline border-warning text-warning" ><i class="far fa-heart"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
