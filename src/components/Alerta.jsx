import React from "react";

const Alerta = ({ tipo, children }) => {
  const alertClass = `alert alert-${tipo}`;
  return <div className={alertClass}>{children}</div>;
};

export default Alerta;
