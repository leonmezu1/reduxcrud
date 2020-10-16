import React from "react";
import { useDispatch, useSelector, useHistory } from "react-redux";

const EditarProducto = () => {
  const history = useHistory();
  // producto a editar
  const producto = useSelector(
    (state) =>
      state.productos.productos.filter(
        (producto) => producto.id === state.productos.productoeditar
      )[0]
  );

  if (!producto) history.push("/");

  const { nombre, precio } = producto;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>
            <form>
              <div className="form-group">
                <label>Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={nombre}
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