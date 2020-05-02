import { Exercise, Trophy } from "../../models";
import { Drawers } from "../../services";

export interface UserProfileState {
	saved: Exercise[];
	finished: Exercise[];
	trophies: Trophy[];
	openDrawer: Drawers;
}
