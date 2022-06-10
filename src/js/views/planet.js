import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DetallesPlanet from "../component/DetallesPlanet";

import "../../styles/demo.css";

export const Planet = () => {
  return (
    <div className="container">
      <DetallesPlanet />
    </div>
  );
};
