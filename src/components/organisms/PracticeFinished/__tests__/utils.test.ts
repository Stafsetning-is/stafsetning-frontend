import { getFeedback } from "../utils";
/**
 * These tests are to ensure that the feedback is grammatically accurate
 * Both the number of errors as well as the feedback string is tested
 */
describe("Error feedback based on error", () => {
    it("Should give correct string with 0 errors and a plural form villur", () => {
        const string = getFeedback(0);
        expect(string).toBe(
            "0 villur! Æðislegt! engar villur. Þú ert alveg með þetta"
        );
    });

    it("Should give correct string with 1 error and a singular form villa", () => {
        const string = getFeedback(1);
        expect(string).toBe("1 villa! Næstum því fullkomið. Vel Gert!");
    });

    it("Should give correct string with 2 errors and a plural form villur", () => {
        const string = getFeedback(2);
        expect(string).toBe("2 villur! Vel Gert!");
    });

    it("Should give correct string with 3 errors and a plural form villur", () => {
        const string = getFeedback(3);
        expect(string).toBe("3 villur! Vel Gert!");
    });

    it("Should give correct string with 21 errors and a singular form villa", () => {
        const string = getFeedback(21);
        expect(string).toBe(
            "21 villa! Þetta hefði mátt fara betur. Prufaðu aftur..."
        );
    });

    it("Should give correct string with 20 errors and a plural form villur", () => {
        const string = getFeedback(20);
        expect(string).toBe(
            "20 villur! Þetta hefði mátt fara betur. Prufaðu aftur..."
        );
    });

    it("Should give correct string with 11 errors and a plural form villur", () => {
        const string = getFeedback(11);
        expect(string).toBe(
            "11 villur! Þetta hefði mátt fara betur. Prufaðu aftur..."
        );
    });
});
