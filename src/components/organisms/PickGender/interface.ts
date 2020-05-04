import { User } from "../../../models";

export interface IProps extends User {
	changeUserGender: (gender: "male" | "female") => void;
}
