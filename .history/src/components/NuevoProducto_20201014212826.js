import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions de redux

import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = () => {
  // Utilizar use dispatch y te crea una funcion

  const dispatch = useDispatch();
  // mandar a llamar el action del productoAction
  const agregarProducto = () => dispatch(crearNuevoProductoAction());
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    // validar formulario

    // si no hay errores

    // crear el nuevo producto
    agregarProducto();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label>Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
