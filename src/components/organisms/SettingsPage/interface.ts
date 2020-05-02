import { User, UserPreference } from "../../../models";

export interface IProps extends User {
	changeUserPreferences: (pref: UserPreference) => void;
	changeUserDifficulty: (val: number) => void;
}

export interface DifficultyForm {
	difficulty: number;
}
