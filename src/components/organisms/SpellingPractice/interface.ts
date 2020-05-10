import { Exercise, User } from "../../../models";
import { TutorialMessage } from "../../../services";

export interface IProps extends Exercise {
	user: User;
	removeDialogByType: (type: TutorialMessage) => void;
}
