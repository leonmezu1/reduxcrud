import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

import clienteAxios from "../config/axios";

// Crear nuevos productos

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

// Si el producto se guarda en la base de datos

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// Si hubo un error

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

export const crearNuevoProductoAction = (producto) => {
  return (dispatch) => {
    dispatch(agregarProducto());

    try {
      // Insertar en la API
      clienteAxios.post("productos", producto);
      // si todo sale bien actualiza el state
      dispatch(agregarProductoExito(producto));
    } catch (e) {
      console.error(e);
      dispatch(agregarProductoError(true));
    }
  };
};
