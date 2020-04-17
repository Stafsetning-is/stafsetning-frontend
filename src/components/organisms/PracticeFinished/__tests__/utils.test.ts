import { getFeedback } from "../utils";
describe("Error feedback based on error", () => {
	it("Should give correct string with 2 errors", () => {
		const string = getFeedback(2);
		expect(string).toBe("2 villur! Vel Gert!");
	});
});
