import { TutorialMessage } from "../services";
import store from "../store";
import { removeDialogByType } from "../actions";

/**
 * Hook that takes in an callback that returns boolean
 * and an type from TutorialMessage
 *
 * if the callback is true then that type
 * is removed from the tutorial dialog true
 *
 * @param cb
 * @param type
 */
export const useRemoveTutorialItems = (
	cb: () => boolean,
	type: TutorialMessage
) => {
	if (cb()) store.dispatch(removeDialogByType(type));
	return null;
};
