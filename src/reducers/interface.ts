import { AuthState } from "./authReducer";
import { FilterState } from "./filterReducer";
import { ExercisesState } from "./exercisesReducer";
import { UserProfileState } from "./userProfileReducer";
import { SocketState } from "./socketReducer";
import { TutorialState } from "./tutorialReducer";

export interface StoreState {
	auth: AuthState;
	filter: FilterState;
	exercises: ExercisesState;
	userProfile: UserProfileState;
	socket: SocketState;
	tutorial: TutorialState;
}
