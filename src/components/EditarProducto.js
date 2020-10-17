import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  // nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: "",
    precio: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();
  // producto a editar
  const productoEditar = useSelector(
    state =>
      state.productos.productos.filter(
        producto => producto.id === state.productos.productoeditar
      )[0]
  );

  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  if (!productoEditar) {
    history.push("/");
    return null;
  }

  // leer datos del formulario

  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditarProducto = e => {
    e.preventDefault();

    dispatch(editarProductoAction(producto));
    history.push("/");
  };

  const { nombre, precio } = producto; // ES IMPORTANTE QUE SELECCIONE EL DEL STATE

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
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
                  onChange={onChangeFormulario}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
