import { AuthState } from "./authReducer";
import { FilterState } from "./filterReducer";
import { ExercisesState } from "./exercisesReducer";

export interface StoreState {
	auth: AuthState;
	filter: FilterState;
	exercises: ExercisesState;
}
