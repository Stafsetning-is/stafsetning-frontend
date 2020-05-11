import {
	OpenFileInPublisherActions,
	AddSplitAction,
	RemoveSplitAction,
	SetEndRangeAction,
	SetStartRangeAction,
	CompletePublishAction,
} from "./interface";
import { File } from "../../models";
import { ActionTypes } from "../types";

/**
 * PUBLISHER ACTIONS
 *
 * Responsible for manipulating and changing
 * state for the publisher
 */

/**
 * opens a file in the publisher
 * @param file File Interface
 */
export const openFileInPublisher = (file: File): OpenFileInPublisherActions => {
	return {
		type: ActionTypes.openFileInPublisher,
		payload: file,
	};
};

/**
 * Adds split to the currently open file
 * @param splitAt the place to split at
 */
export const addSplit = (splitAt: number): AddSplitAction => {
	return {
		type: ActionTypes.addSplit,
		payload: splitAt,
	};
};

/**
 * Removes a split at a location
 * @param splitAt the place to remove split from
 */
export const removeSplit = (splitAt: number): RemoveSplitAction => {
	return {
		type: ActionTypes.removeSplit,
		payload: splitAt,
	};
};

/**
 * set the end of difficulty range for exercise
 * @param value difficulty value
 */
export const setEndRange = (value: number): SetEndRangeAction => {
	return {
		type: ActionTypes.setEndRange,
		payload: value,
	};
};

/**
 * sets the start of difficulty range for exercise
 * @param value difficulty value
 */
export const setStartRange = (value: number): SetStartRangeAction => {
	return {
		type: ActionTypes.setStartRage,
		payload: value,
	};
};

/**
 * completes the publishing of a file
 * @param value the file id
 */
export const completePublish = (value: string): CompletePublishAction => {
	return {
		type: ActionTypes.completePublish,
		payload: value,
	};
};
export * from "./interface";
