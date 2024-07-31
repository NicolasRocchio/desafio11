import React, { useState } from "react";
import Alerta from "./Alerta";

const FormularioDeContacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [alerta, setAlerta] = useState(null);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setAlerta(
      <Alerta tipo="success">
        <p>
          <strong>Nombre:</strong> {nombre}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Mensaje:</strong> {mensaje}
        </p>
      </Alerta>
    );
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            rows="3"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {alerta}
    </div>
  );
};

export default FormularioDeContacto;
