import { AuthState } from "./authReducer";
import { FilterState } from "./filterReducer";
import { ExercisesState } from "./exercisesReducer";
import { PracticesState } from "./userProfileReducer";
import { SocketState } from "./socketReducer";

export interface StoreState {
	auth: AuthState;
	filter: FilterState;
	exercises: ExercisesState;
	userProfile: PracticesState;
	socket: SocketState;
    exercises: ExercisesState;
}
