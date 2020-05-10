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
import { TIME_BETWEEN_DIALOGS_MS } from "./utils";
import store from "../../store";

/**
 * TUTORIAL ACTIONS
 *
 * this file contains all the actions
 * that are used to change and manipulate
 * the tutorial state of the app
 *
 * these actions are:
 *     - queueTutorialItems
 *     - shrinkTutorial
 *     - deqeueDialogQueue
 *     - continueTutorialDialog
 *     - removeDialogsByLocation
 *     - growTutorial
 *     - removeDialogByType
 *
 */

/**
 * Adds an array of tutorial items to ther
 * queue
 * @param items array of tutorial items
 */
export function queueTutorialItems(
	items: TutorialItem[]
): QueueTutorialItemsAction {
	// returns the action
	return {
		type: ActionTypes.queueTutorialItems,
		payload: items,
	};
}

/**
 * when called the tutorial will
 * shrink from the full page view
 * down to the minimized view
 */
export function shrinkTutorial(): ShrinkTutorialAction {
	// returns the action
	return {
		type: ActionTypes.shrinkTutorial,
	};
}

/**
 * deques an dialog item from the queue
 * and adds it as current item
 */
export function deqeueDialogQueue(): DequeDialogQueueAction {
	// returns action
	return {
		type: ActionTypes.dequeueTutorialQueue,
	};
}

/**
 * continues the dialog
 */
export function continueTutorialDialog(): ContinueTutorialDialogAction {
	// via set timeout, dequeue the next dialog item
	setTimeout(
		() => store.dispatch(deqeueDialogQueue()),
		TIME_BETWEEN_DIALOGS_MS
	);
	// returns the action
	return {
		type: ActionTypes.continueTutorialDialog,
	};
}

/**
 * Removes all dialogs by that location both
 * from the queue and current item
 * @param location location enumeration
 */
export function removeDialogsByLocation(
	location: TutorialLocations
): RemoveDialogsByLocationAction {
	return {
		type: ActionTypes.removeDialogsByLocation,
		payload: location,
	};
}

/**
 * Enlarges the tutorial to the full screen view
 */
export function growTutorial(): GrowTutorialAction {
	return {
		type: ActionTypes.growTutorial,
	};
}

/**
 * removes dialog items that have said type
 * @param type the type of the dialog
 */
export function removeDialogByType(
	type: TutorialMessage
): RemoveDialogByTypeAction {
	setTimeout(
		() => store.dispatch(deqeueDialogQueue()),
		TIME_BETWEEN_DIALOGS_MS
	);
	return {
		type: ActionTypes.removeDialogByType,
		payload: type,
	};
}

export * from "./interface";
