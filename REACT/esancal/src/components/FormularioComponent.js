import React from "react";

const FormularioComponent = () => {

  const handleSubmit =(botonS)=>{
    botonS.preventDefault();
  }

  return (
    <div className="col">
      <h1>Formulario de ingreso</h1>
      <form onSubmit={handleSubmit}>
        <label for="producto">Producto:</label>
        <br></br>
        <input
          class="form-control"
          type="text"
          id="producto"
          name="producto"
          placeholder="Ingresa el producto"
          required
        ></input>

        <br></br>
        <br></br>

        <label for="cantidad">Cantidad:</label>
        <br></br>
        <input
          class="form-control"
          type="number"
          id="cantidad"
          name="cantidad"
          min="0"
          placeholder="Ingresa la cantidad"
          required
        ></input>

        <br></br>
        <br></br>

        <label for="valor">Valor</label>
        <br></br>
        <input
          class="form-control"
          type="number"
          id="valor"
          name="valor"
          placeholder="Ingresa el valor"
          required
        ></input>

        <hr></hr>
        <br></br>

        <button class="btn btn-primary me-3" type="submit">
          Añadir
        </button>
        <button class="btn btn-secondary" type="reset">
          Vaciar
        </button>
      </form>
    </div>
  );
};

export default FormularioComponent;
