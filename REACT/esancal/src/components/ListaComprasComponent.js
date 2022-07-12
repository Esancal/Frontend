import React from "react";
import DatosLiComponent from "./DatosLiComponent";

const productos = [
  {
    key:0,
    producto: 'Pan',
    cantidad: '10',
    valor: '1500'
  },
  {
    key:1,
    producto: 'Arroz',
    cantidad: '10',
    valor: '1000'
  },
  {
    key:2,
    producto: 'Cepillo de dientes',
    cantidad: '2',
    valor: '3000'
  },
  {
    key:3,
    producto: 'Lapices de colores',
    cantidad: '10',
    valor: '5000'
  },
  {
    key:4,
    producto: 'Shampoo 14 en 1',
    cantidad: '1',
    valor: '500'
  },
  {
    key:5,
    producto: 'Lapicera',
    cantidad: '1',
    valor: '500'
  },
  {
    key:6,
    producto: 'Esclavo',
    cantidad: '1',
    valor: '5000000'
  }
  
]

const ListaComprasComponent = () => {
  return (
    <div className="col-8">
      <h1>Lista de compras</h1>
      <ul>
      {
          /* (VARIABLE_ITERABLE => <COMPONENTE PARAMETRO = {VARIABLE_ITERABLE}/>) */
          productos.map(p => <DatosLiComponent key={p.key} productos={p}/>)
          }
      </ul>
    </div>
  );
};

export default ListaComprasComponent;
