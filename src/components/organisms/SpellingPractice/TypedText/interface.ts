import { UserPreference } from "../../../../models";

export interface IProps extends UserPreference {
	typed: string;
	preview: string;
	error: boolean;
}
