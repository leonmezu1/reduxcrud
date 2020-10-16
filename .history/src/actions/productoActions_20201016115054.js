import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_DESCARGA_PRODUCTOS_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS_ERROR,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

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

// Descargar productos de la base de datos en la

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

// Si se descargaron los productos exitosamente
const descargarProductosExito = (productos) => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});

// Si hubo un error a la hora de descargar los productos

const descargarProductosError = (estado) => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  payload: estado,
});

export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch(descargarProductos());
    const respuesta = await clienteAxios.get("/productos");
    try {
      setTimeout(() => {
        dispatch(descargarProductosExito(respuesta.data));
      }, 10);
    } catch (e) {
      // Alertar
      Swal.fire({ icon: "error", title: "Hubo un error", text: e });
      dispatch(descargarProductosError(true));
    }
  };
};

export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // Insertar en la API
      await clienteAxios.post("productos", producto);
      // si todo sale bien actualiza el state
      // Alertar
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
      dispatch(agregarProductoExito(producto));
    } catch (e) {
      // Alertar
      Swal.fire({ icon: "error", title: "Hubo un error", text: e });
      dispatch(agregarProductoError(true));
    }
  };
};
