import React, { useState } from "react";

{
  /* Añadir para el formulario*/
}
const initialValues = [
  {
    key: "",
    producto: "",
    cantidad: "",
    valor: ""
  }
];

const FormularioComponent = ({productoAdd}) => {
  const [values, setValues] = useState(initialValues);
  const {key, producto, cantidad, valor } = values;

  const handleInputChange = (p) => {
    const changedFormValue = {
      ...values,
      [p.target.name] : p.target.value,
      //key:key
    };
    setValues(changedFormValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productoAdd(values);
  };

  return (
    <div className="col">
      <h1>Formulario de ingreso</h1>
      <form onSubmit={handleSubmit}>
      <label for="key">ID:</label>
        <br></br>
        <input
          class="form-control"
          type="text"
          id="key"
          name="key"
          placeholder="Ingresa el ID"
          value={key}
          onChange={handleInputChange}
          required
        ></input>

        <br></br>
        <br></br>
        <label for="producto">Producto:</label>
        <br></br>
        <input
          class="form-control"
          type="text"
          id="producto"
          name="producto"
          placeholder="Ingresa el producto"
          value={producto}
          onChange={handleInputChange}
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
          value={cantidad}
          onChange={handleInputChange}
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
          value={valor}
          onChange={handleInputChange}
          required
        ></input>

        <hr></hr>
        <br></br>

        <button class="btn btn-primary me-3" type="submit">
          Añadir
        </button>
        <button id="reset" class="btn btn-secondary" type="button" onClick={()=>setValues({key:"", producto:"", cantidad:"", valor:""})}>
          Vaciar
        </button>
      </form>
    </div>
  );
};

export default FormularioComponent;
