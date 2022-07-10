import React from "react";

// Esto es una Arrow function
const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <h1>Lista de compras</h1>
          <ul>
            <li>Lechuga</li>
            <li>Pollo</li>
            <li>Cepillo</li>
            <li>Lapices de colores</li>
            <li>Shampoo 14 en 1</li>
          </ul>
          <h1>Lista de actividades</h1>
          <ol>
            <li>Ir a comprar alimento</li>
            <li>Darle de comer a las mascotas</li>
            <li>Prepararme comida</li>
          </ol>
        </div>
        <div className="col">
          <h1>Formulario de ingreso</h1>
          <form action="" method="post">
            <label for="Nombre">Nombre:</label>
            <br></br>
            <input
              type="text"
              id="Nombre"
              name="Nombre"
              placeholder="Ingresa tu Nombre"
            ></input>
            <br></br>
            <br></br>
            <label for="Apellido">Apellido:</label>
            <br></br>
            <input
              type="text"
              id="Apellido"
              name="Apellido"
              placeholder="Ingresa tu Apellido"
            ></input>
            <br></br>
            <br></br>
            <label for="Edad">Edad:</label>
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
            <label for="cumpleaños">Fecha de cumpleaños</label>
            <br></br>
            <input
              type="date"
              id="cumpleaños"
              name="cumpleaños"
              required
            ></input>
            <br></br>
            <hr></hr>
            <button type="submit">Enviar</button>
            <input type="reset" value="Vaciar"></input>
          </form>
        </div>
      </div>
    </div>
  );
};
export default App;
