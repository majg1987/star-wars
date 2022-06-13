import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DetallesVehicles from "../component/DetallesVehicles";

export const Vehicle = () => {
  return (
    <div className="container">
      <DetallesVehicles />
    </div>
  );
};
