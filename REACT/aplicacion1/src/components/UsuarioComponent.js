import React from "react";
import TarjetaComponent from "./TarjetaComponent";
import FormularioComponent from "./FormularioComponent";

// const usuario1 = {
//   nombre: 'Joseph',
//   apellido: 'Nastyo',
//   edad: '44'
// };

// const usuario2 = {
//   nombre: 'Andres',
//   apellido: 'Vamps',
//   edad: '32'
// };

const usuarios = [
  {
    nombre: 'Joseph',
    apellido: 'Nastyo',
    edad: '44'
  },
  {
    nombre: 'Andres',
    apellido: 'Vamps',
    edad: '32'
  }
]

const UsuarioComponent = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <h1>Lista</h1>
          {/* Estoy llamando al js creado, de manera que es reutilizable */}
        </div>
        <div className="col">
          <h1>Formulario</h1>
          <FormularioComponent />
        </div>
      </div>
    </div>
  );
};
export default UsuarioComponent;
