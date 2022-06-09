import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
		  width={"600px"}
            src="https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png"
            alt="imagen 800x600"
          />
        </div>
        <div className="col-6">
          <h1>Nombre Personaje</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            placeat ut ipsam beatae voluptatibus in non rerum excepturi nulla
            tenetur similique, numquam expedita praesentium ipsum mollitia unde
            quasi doloremque blanditiis!
          </p>
        </div>
      </div>
    </div>
  );
};
