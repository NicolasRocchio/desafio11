import React from "react";

const Tarjeta = ({ nombre, profesion, foto }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={foto} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{profesion}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
