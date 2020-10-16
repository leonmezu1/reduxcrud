import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions de redux

import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = ({ history }) => {
  // State del componente

  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);
  // Utilizar use dispatch y te crea una funcion

  const dispatch = useDispatch();

  // Acceder al state del store para

  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  console.log(cargando);
  // mandar a llamar el action del productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    // validar formulario
    if (nombre.trim() === "" || precio <= 0) return;

    // si no hay errores

    // crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    // redirecionar al home
    history.push("/");
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
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {cargando ? <p>Cargando</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
