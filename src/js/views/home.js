import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import CardCharacter from "../component/CardCharacter";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles.js";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.vehiculos);

  return (
    <div className="container">
      <h2 className="text-danger mb-5"> Characters </h2>
      <div className=" container  overflow-auto p-0 mb-4">
        <ul className="d-flex">     
          {store.personajes.map((item, index) => (
            <li key={index}>
              <CardCharacter
                name={item.name}
                gender={item.gender}
                hairColor={item.hair_color}
                eyeColor={item.eye_color}
                id={index}
              />
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-danger mb-5"> Planets </h2>
      <div className="container d-flex overflow-auto p-0 mb-4">
      {store.planetas.map((item, index) => (
            <li key={index}>
              <CardPlanets
                name={item.name}
                population={item.population}
                terrain={item.terrain}
                id={index}
              />
            </li>
          ))}
      </div>
      <h2 className="text-danger mb-5"> Vehicles </h2>
      <div className="container d-flex overflow-auto p-0">
      {store.vehiculos.map((item, index) => (
            <li key={index}>
              <CardVehicles
                name={item.name}
                modelo={item.model}
                claseVehiculo={item.vehicle_class}
                pasajeros={item.passengers}
                id={index}
              />
            </li>
          ))}
      </div>
    </div>
  );
};
