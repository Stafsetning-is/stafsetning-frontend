import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { StoreState } from "./interface";

export default combineReducers<StoreState>({
	auth: authReducer
});

export * from "./authReducer";
export * from "./interface";
