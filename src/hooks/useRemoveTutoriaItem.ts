import { TutorialMessage } from "../services";
import store from "../store";
import { removeDialogByType } from "../actions";

export const useRemoveTutorialItems = (
	cb: () => boolean,
	type: TutorialMessage
) => {
	if (cb()) store.dispatch(removeDialogByType(type));
	return null;
};
