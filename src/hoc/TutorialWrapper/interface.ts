import { TutorialItem, TutorialLocations } from "../../services";
import { User } from "../../models";

export interface IProps {
	children: React.ReactNode;
	items: TutorialItem[];
	location: TutorialLocations;
	user: User;
	queueTutorialItems: (items: TutorialItem[]) => void;
	removeDialogsByLocation: (loc: TutorialLocations) => void;
}
