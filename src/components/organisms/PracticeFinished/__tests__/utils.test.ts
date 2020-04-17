import { getFeedback } from "../utils";
describe("Error feedback based on error", () => {
    it("Should give correct string with 2 errors", () => {
        const string = getFeedback(2);
        expect(string).toBe("2 villur! Vel Gert!");
    });

    describe("Error feedback based on error", () => {
        it("Should give correct string with 1 error", () => {
            const string = getFeedback(1);
            expect(string).toBe("1 villa! Næstum því fullkomið. Vel Gert!");
        });
    });

    describe("Error feedback based on error", () => {
        it("Should give correct string with 3 errors", () => {
            const string = getFeedback(3);
            expect(string).toBe("3 villur! Vel Gert!");
        });
    });

    describe("Error feedback based on error", () => {
        it("Should give correct string with 21 errors", () => {
            const string = getFeedback(21);
            expect(string).toBe(
                "21 villa! Þetta hefði mátt fara betur. Prufaðu aftur..."
            );
        });
    });

    describe("Error feedback based on error", () => {
        it("Should give correct string with 20 errors", () => {
            const string = getFeedback(20);
            expect(string).toBe(
                "20 villur! Þetta hefði mátt fara betur. Prufaðu aftur..."
            );
        });
    });

    describe("Error feedback based on error", () => {
        it("Should give correct string with 11 errors", () => {
            const string = getFeedback(11);
            expect(string).toBe(
                "11 villur! Þetta hefði mátt fara betur. Prufaðu aftur..."
            );
        });
    });
});
