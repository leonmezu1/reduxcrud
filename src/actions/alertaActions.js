import { MOSTRARALERTA, OCULTARALERTA } from "../types";

const crearAlerta = alerta => ({
  type: MOSTRARALERTA,
  payload: alerta,
});

const ocultarAlerta = () => ({
  type: OCULTARALERTA,
});

// muestra una alerta
export const mostrarAlerta = alerta => {
  return dispatch => {
    dispatch(crearAlerta(alerta));
  };
};
// ocultar una alerta
export const ocultarAlertaAction = () => {
  return dispatch => {
    dispatch(ocultarAlerta());
  };
};
