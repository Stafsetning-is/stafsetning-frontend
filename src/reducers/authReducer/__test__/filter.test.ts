import reducer from "..";

describe("userProfile reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, { type: -1, payload: null })).toEqual({
			user: {
				name: "",
				avatar: "",
				type: "unknown",
				_id: "",
				points: 0,
				difficulty: 0,
				gender: "male",
				preferences: {
					fontSize: 0,
					previewTTL: 0,
					alwaysShowPreview: false,
					showOnScreenKeyboard: false,
					textBackground: "#F8F8F8",
				},
				avatars: {
					male: "",
					female: "",
				},
			},
			type: "unknown",
			pendingAdminInvite: [],
		});
	});
});
