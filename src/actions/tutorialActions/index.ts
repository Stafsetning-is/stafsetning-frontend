import { ActionTypes } from "../types";
import {
	TutorialItem,
	TutorialLocations,
	TutorialMessage,
} from "../../services";
import {
	QueueTutorialItemsAction,
	ShrinkTutorialAction,
	ContinueTutorialDialogAction,
	DequeDialogQueueAction,
	RemoveDialogsByLocationAction,
	GrowTutorialAction,
	RemoveDialogByTypeAction,
} from "./interface";
import store from "../../store";

export function queueTutorialItems(
	items: TutorialItem[]
): QueueTutorialItemsAction {
	return {
		type: ActionTypes.queueTutorialItems,
		payload: items,
	};
}

export function shrinkTutorial(): ShrinkTutorialAction {
	return {
		type: ActionTypes.shrinkTutorial,
	};
}

export function deqeueDialogQueue(): DequeDialogQueueAction {
	return {
		type: ActionTypes.dequeueTutorialQueue,
	};
}

export function continueTutorialDialog(): ContinueTutorialDialogAction {
	setTimeout(() => store.dispatch(deqeueDialogQueue()), 1000);
	return {
		type: ActionTypes.continueTutorialDialog,
	};
}

export function removeDialogsByLocation(
	location: TutorialLocations
): RemoveDialogsByLocationAction {
	return {
		type: ActionTypes.removeDialogsByLocation,
		payload: location,
	};
}

export function growTutorial(): GrowTutorialAction {
	return {
		type: ActionTypes.growTutorial,
	};
}

export function removeDialogByType(
	type: TutorialMessage
): RemoveDialogByTypeAction {
	setTimeout(() => store.dispatch(deqeueDialogQueue()), 1000);
	return {
		type: ActionTypes.removeDialogByType,
		payload: type,
	};
}

export * from "./interface";
