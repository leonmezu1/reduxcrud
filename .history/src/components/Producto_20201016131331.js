import React from "react";
import { Link } from "react-router-dom";

// Redux

import { useDispatch } from "redux-redux";
import { borrarProductoAction } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // confirmar si se desea eliminar el producto

  const confirmarEliminarProducto = (id) => {
    // preguntart al usuario de

    // pasar al usuario
    dispatch(borrarProductoAction(id));
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
