import React from "react";
import Tarjeta from "./components/Tarjeta";
import Alerta from "./components/Alerta";
import Contador from "./components/Contador";
import FormularioDeContacto from "./components/FormularioDeContacto";

const InicioApp = () => {
  return (
    <div className="container mt-5">
      <h1>Ejercicios con React y Bootstrap</h1>

      <div className="container mt-5">
        <h2>Tarjeta de Presentación</h2>
        <Tarjeta
          nombre="Pedro Perez"
          profesion="Ingeniero"
          foto="imgs/modelo.jpg"
        />
      </div>

      <div className="container mt-5">
        <h2>Alerta Personalizada</h2>
        <Alerta tipo="success">Este es un mensaje de éxito.</Alerta>
        <Alerta tipo="warning">Este es un mensaje de advertencia.</Alerta>
        <Alerta tipo="danger">Este es un mensaje de error.</Alerta>
      </div>

      <div className="container mt-5">
        <h2>Contador</h2>
        <Contador />
      </div>

      <div className="container mt-5">
        <h2>Formulario de Contacto</h2>
        <FormularioDeContacto />
      </div>
    </div>
  );
};

export default InicioApp;
