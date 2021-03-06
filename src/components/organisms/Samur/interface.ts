import { User } from "../../../models";
import { TutorialItem } from "../../../services";

export interface IProps {
	user: User;
	current: TutorialItem | undefined;
	small: boolean;
	queue: TutorialItem[];
	shrinkTutorial: () => void;
	continueTutorialDialog: () => void;
	growTutorial: () => void;
}
