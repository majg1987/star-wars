import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetallesVehicles = () => {

  const{store}=useContext(Context);
  const {theid} = useParams();

  return (
    <div className="row">
      <div className="col-12 col-lg-6 text-center">
        <img
          className="imagen"
          src="https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png"
          alt="imagen 800x600"
        />
      </div>
      <div className="col-12 col-lg-6 text-center">
        <h1> {store.vehiculos[theid]?.name} </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nemo, placeat
          ut ipsam beatae voluptatibus in non rerum excepturi nulla tenetur
          similique, numquam expedita praesentium ipsum mollitia unde quasi
          doloremque blanditiis!Lorem ipsum dolor sit amet consectetur
          adipisicing elit.Quod voluptatum cumque excepturi architecto, sit cum
          error dolores iste ipsam quasi recusandae neque, alias ratione aperiam
          impedit libero illo vitae saepe.Lorem ipsum dolor sit amet consectetur
          adipisicing elit.Reiciendis cumque culpa excepturi eum optio dicta
          enim repellat.Veniam numquam doloremque voluptatem beatae.Sapiente
          doloremque adipisci eos aspernatur nihil cum amet!
        </p>
      </div>
      <div className="lineaSeparadora bg-danger mt-4 mb-4"> </div>
      <div className="row text-center  text-danger fw-bolder">
        <div className="col-2 r">
          <p className="fw-bolder"> Nombre </p>
          <p className="fw-bolder"> {store.vehiculos[theid]?.name} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Modelo</p>
          <p className="fw-bolder"> {store.vehiculos[theid]?.model} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Tipo de Vehiculo </p>
          <p className="fw-bolder"> {store.vehiculos[theid]?.vehicle_class} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Pasajeros </p>
          <p className="fw-bolder"> {store.vehiculos[theid]?.passengers} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Max. Velocidad </p>
          <p className="fw-bolder"> {store.vehiculos[theid]?.max_atmosphering_speed} </p>
        </div>
        <div className="col-2">
          <p className="fw-bolder"> Consumibles </p>
          <p className="fw-bolder"> {store.vehiculos[theid]?.consumables} </p>
        </div>
      </div>
    </div>
  );
};

export default DetallesVehicles;
