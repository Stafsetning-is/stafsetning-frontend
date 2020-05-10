import { TutorialState } from "./interface";
import { TutorialItem } from "../../services";

export const filterPracticeState = (
	state: TutorialState,
	cb: (item: TutorialItem) => boolean
) => ({
	...state,
	queue: state.queue.filter((item) => cb(item)),
	current: state.current
		? cb(state.current)
			? state.current
			: undefined
		: undefined,
});
