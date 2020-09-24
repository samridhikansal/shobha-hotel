import invoiceReducer from "./invoiceReducer";
import menuReducer from "./menuReducer";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({ invoiceReducer, menuReducer });
