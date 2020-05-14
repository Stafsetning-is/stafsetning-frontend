import { User } from "../../../models";

export interface IProps extends User {
	changeUserDifficulty: (val: number) => void;
	signOut: () => void;
}

export interface DifficultyForm {
	difficulty: number;
}
