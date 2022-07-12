import React, { useState } from "react";
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

const initialUsuarios = [
  {
    key: 0,
    nombre: "Joseph",
    apellido: "Nastyo",
    edad: "44",
  },
  {
    key: 1,
    nombre: "Andres",
    apellido: "Vamps",
    edad: "32",
  },
  {
    key: 2,
    nombre: "Aato",
    apellido: "Romps",
    edad: "432",
  },
];

const UsuarioComponent = () => {
  const [usuarios, setUsuarios] = useState(initialUsuarios);
  {
    /* const state = useState(initialUsuarios);
  state[0]=initialUsuarios 
  state[1]= funcion que nos permite hacer cambios */
  }

  const tarjetaDelete = (usuarioKey) => {
    const changeUsuarios = usuarios.filter((u) => u.key !== usuarioKey);
    setUsuarios(changeUsuarios);
  };

  const usuarioAdd = (usuario) => {
    const addUsuarios = [...usuarios, usuario];
    setUsuarios(addUsuarios);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <h1>Lista</h1>
          {/* Estoy llamando al js creado, de manera que es reutilizable */}
          {/* Las llaves son una insercion de codigo JavaScript */}
          {
            /* (VARIABLE_ITERABLE => <COMPONENTE PARAMETRO = {VARIABLE_ITERABLE}/>) */
            usuarios.map((u) => (
              <TarjetaComponent
                key={u.key}
                usuario={u}
                tarjetaDelete={tarjetaDelete}
              />
            ))
          }
        </div>
        <div className="col">
          <h1>Formulario</h1>
          <FormularioComponent usuarioAdd={usuarioAdd} />
        </div>
      </div>
    </div>
  );
};
export default UsuarioComponent;
