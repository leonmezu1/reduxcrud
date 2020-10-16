import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

// Crear nuevos productos

export const crearNuevoProductoAction = () => {
  return () => {
    console.log("Desde el action");
  };
};
