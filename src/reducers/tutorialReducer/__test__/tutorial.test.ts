import reducer from "../";
import { ActionTypes } from "../../../actions/types";
import { TutorialLocations } from "../../../services";

describe("userProfile reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, { type: -1, payload: null })).toEqual({
			current: undefined,
			queue: [],
			placement: TutorialLocations.frontPage,
			fullScreen: false,
		});
	});

	it("should handle set open drawer", () => {
		expect(
			reducer(undefined, {
				type: ActionTypes.shrinkTutorial,
			})
		).toMatchObject({
			fullScreen: false,
		});
	});

	it("should handle set open drawer", () => {
		expect(
			reducer(undefined, {
				type: ActionTypes.growTutorial,
			})
		).toMatchObject({
			fullScreen: true,
		});
	});
});
