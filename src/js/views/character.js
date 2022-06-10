import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DetallesCharacter from "../component/DetallesCharacter";

import "../../styles/demo.css";

export const Character = () => {
  return (
    <div className="container">
      <DetallesCharacter />
    </div>
  );
};
