import React from "react";
import Card from "../component/Card";
import "../../styles/home.css";

export const Home = () => (
  <div className="container">
    <h2 className="text-danger mb-4">Characters</h2>
    <div className=" container d-flex overflow-auto p-0 mb-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <h2 className="text-danger mb-5">Planets</h2>
    <div className="container d-flex overflow-auto p-0">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
