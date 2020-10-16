import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Redux

import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // confirmar si se desea eliminar el producto

  const confirmarEliminarProducto = (id) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este producto?",
      text: "¡No podrás revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡bórralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Borrado!", "El producto ha sido borrado.", "success");
        // pasar al usuario
        dispatch(borrarProductoAction(id));
      }
    });
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
