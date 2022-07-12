import React from "react";
import FormularioComponent from "./FormularioComponent";
import ListaComprasComponent from "./ListaComprasComponent";

const CompraComponent = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <ListaComprasComponent />
        <FormularioComponent />
      </div>
    </div>
  );
};
export default CompraComponent;
