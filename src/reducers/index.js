import { combineReducers } from "redux";
import productosReducers from "./productosReducer";
import alertaReducer from "./alertaReducer";

export default combineReducers({
  productos: productosReducers,
  alerta: alertaReducer,
});
