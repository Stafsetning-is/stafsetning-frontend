import { User } from "../../models";
export interface IProps {
	user: User;
	signOut: () => void;
}
