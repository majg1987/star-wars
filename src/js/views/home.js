import React from "react";
import CardCharacter from "../component/CardCharacter";
import CardPlanets from "../component/CardPlanets";
import "../../styles/home.css";


export const Home = () => {



  return (
    <div className="container">
      <h2 className="text-danger mb-5">Characters</h2>
      <div className=" container d-flex overflow-auto p-0 mb-4">
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />   
      </div>
      <h2 className="text-danger mb-5">Planets</h2>
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
