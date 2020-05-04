import { User } from "../../../models";

export interface IProps extends User {
    changeUserDifficulty: (val: number) => void;
    // changeUserPassword: (val: string) => void;
}

export interface DifficultyForm {
    difficulty: number;
}
export interface changePasswordForm {
    password: number;
}
