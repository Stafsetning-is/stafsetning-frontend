import { Exercise, User } from "../../../models";

export interface IProps extends Exercise {
	user: User;
}
