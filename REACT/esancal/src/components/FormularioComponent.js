import React from "react";

const FormularioComponent = () => {
  return (
    <div className="col">
      <h1>Formulario de ingreso</h1>
      <form action="" method="post">
        <label for="Nombre">Producto:</label>
        <br></br>
        <input
          type="text"
          id="Nombre"
          name="Nombre"
          placeholder="Ingresa tu Nombre"
          required
        ></input>
        <br></br>
        <br></br>
        <label for="Edad">Cantidad:</label>
        <br></br>
        <input
          type="number"
          id="Edad"
          name="Edad"
          min="18"
          max="150"
          placeholder="Ingresa tu Edad"
          required
        ></input>
        <br></br>
        <br></br>
        <label for="valor">Valor</label>
        <br></br>
        <input type="number" id="valor" name="valor" placeholder="Ingresa el valor" required></input>
        <br></br>
        <hr></hr>
        <button type="submit">Añadir</button>
        <input type="reset" value="Vaciar"></input>
      </form>
    </div>
  );
};

export default FormularioComponent;
