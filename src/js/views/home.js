import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import CardCharacter from "../component/CardCharacter";
import CardPlanets from "../component/CardPlanets";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const personajes = store.personajes;
  console.log(personajes);

  return (
    <div className="container">
      <h2 className="text-danger mb-5"> Characters </h2>
      <div className=" container  overflow-auto p-0 mb-4">
        <ul className="d-flex">
          {personajes.map((item, index) => (
            <li key={index}>
              <CardCharacter
                name={item.name}
                gender={item.gender}
                hairColor={item.hair_color}
                eyeColor={item.eye_color}
              />
            </li>
          ))}
          ;
        </ul>
      </div>
      <h2 className="text-danger mb-5"> Planets </h2>
      <div className="container d-flex overflow-auto p-0">
        <CardPlanets />
        <CardPlanets />
        <CardPlanets />
        <CardPlanets />
        <CardPlanets />
        <CardPlanets />
        <CardPlanets />
        <CardPlanets />
      </div>
    </div>
  );
};
