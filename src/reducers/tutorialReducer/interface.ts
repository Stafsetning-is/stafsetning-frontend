import { TutorialItem, TutorialLocations } from "../../services";

export interface TutorialState {
	current: TutorialItem | undefined;
	queue: TutorialItem[];
	placement: TutorialLocations;
	fullScreen: boolean;
}
