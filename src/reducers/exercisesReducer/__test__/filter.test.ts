import reducer from "..";

describe("userProfile reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, { type: -1, payload: null })).toEqual({
			selection: [],
		});
	});
});
