import { User } from "../../../models";

export interface IProps extends User {
    changeUserDifficulty: (val: number) => void;
}

export interface DifficultyForm {
    difficulty: number;
}
