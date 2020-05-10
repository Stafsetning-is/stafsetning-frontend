import reducer from "../";
import { ActionTypes } from "../../../actions/types";
describe("userProfile reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, { type: -1, payload: null })).toEqual({
			trophies: [],
			finished: [],
			saved: [],
			openDrawer: "finished",
		});
	});

	it("should handle set open drawer", () => {
		expect(
			reducer(undefined, {
				type: ActionTypes.setOpenDrawer,
				payload: "saved",
			})
		).toMatchObject({
			openDrawer: "saved",
		});
	});
});
