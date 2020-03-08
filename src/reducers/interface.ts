import { AuthState } from "./authReducer";
import { FilterState } from "./filterReducer";

export interface StoreState {
	auth: AuthState;
	filter: FilterState;
}
