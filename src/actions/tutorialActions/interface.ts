import { ActionTypes } from "../types";
import {
	TutorialItem,
	TutorialLocations,
	TutorialMessage,
} from "../../services";

export interface QueueTutorialItemsAction {
	type: ActionTypes.queueTutorialItems;
	payload: TutorialItem[];
}

export interface ShrinkTutorialAction {
	type: ActionTypes.shrinkTutorial;
}

export interface ContinueTutorialDialogAction {
	type: ActionTypes.continueTutorialDialog;
}

export interface DequeDialogQueueAction {
	type: ActionTypes.dequeueTutorialQueue;
}

export interface RemoveDialogsByLocationAction {
	type: ActionTypes.removeDialogsByLocation;
	payload: TutorialLocations;
}

export interface GrowTutorialAction {
	type: ActionTypes.growTutorial;
}

export interface RemoveDialogByTypeAction {
	type: ActionTypes.removeDialogByType;
	payload: TutorialMessage;
}
