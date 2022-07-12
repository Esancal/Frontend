import React from "react";

const DatosLiComponent = ({ productos }) => {
  return (
    <li>
      {productos.producto} / Cantidad: {productos.cantidad} / Valor $
      {productos.valor}
      <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
      <button className="btn btn-sm btn-outline-danger">Eliminar</button>
    </li>
  );
};

export default DatosLiComponent;
