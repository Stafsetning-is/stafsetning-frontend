import { Exercise, User, Trophy } from "../../../models";
import { Drawers } from "../../../services";

export interface IProps {
	user: User;
	saved: Exercise[];
	finished: Exercise[];
	trophies: Trophy[];
	getSavedExercises: () => void;
	fetchFinishedExercises: () => void;
	fetchTrophies: () => void;
}
