import { User } from "../../../../models";

export interface SignupRes {
	user: User;
	token: string;
}

export interface IProps {
	logInUser: (user: User) => void;
}
