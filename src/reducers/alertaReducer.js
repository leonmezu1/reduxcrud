import { MOSTRARALERTA, OCULTARALERTA } from "../types";

const initialState = {
  alerta: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OCULTARALERTA:
      return {
        ...state,
        alerta: null,
      };
    case MOSTRARALERTA:
      return {
        ...state,
        alerta: action.payload,
      };
    default:
      return state;
  }
};
