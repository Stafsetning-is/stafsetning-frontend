import { AuthLevels } from "../AuthService";

export interface TutorialItem {
	text: string;
	type: TutorialMessage;
	auth: AuthLevels;
	actions: TutorialAction[];
	location: TutorialLocations;
	doOnLoad: TutorialDialogActions[];
}

export interface TutorialAction {
	do: TutorialDialogActions[];
	text: string;
	callback?: () => void;
	type: TutorialActionType;
}

export type TutorialActionType = "info" | "error";

export type TutorialDialogActions =
	| "close"
	| "stop"
	| "grow"
	| "shrink"
	| "continue";

export type TutorialMessage =
	| "click-exercise-box-on-front-page"
	| "try-first-exercise"
	| "exercise-explain-step-1"
	| "exercise-explain-step-2"
	| "exercise-explain-step-3"
	| "exercise-explain-step-4";

export enum TutorialLocations {
	frontPage,
	exercisePage,
}
