import { User, UserPreference } from "../../../models";

export interface IProps extends User {
	changeUserPreferences: (pref: UserPreference) => void;
	label: string;
}
