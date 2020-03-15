import { User } from "../../../models";

export interface LogInRes {
    user: User;
    token: string;
}

export interface IProps {
    logInUser: (user: User) => void;
}
