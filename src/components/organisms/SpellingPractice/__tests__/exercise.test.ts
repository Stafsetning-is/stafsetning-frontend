import { Exercise } from "../utils";

const sentenceParts = [
	"Carl went out to the shop",
	"to buy some groceries",
	"for his mom"
];

describe("Initialize exercise and input", () => {
	it("should be able to create exercse", () => {
		Exercise.startExercise(sentenceParts);
		expect(true).toBe(true);
	});

	it("Should take input, not depending on correctness", () => {
		const e = Exercise.startExercise(sentenceParts);
		e.type("C");
		e.type("a");
		e.type(".");
		expect(true).toBe(true);
	});

	it("Should not proceed on correct input input", () => {
		const e = Exercise.startExercise(sentenceParts);
		expect(e.getCurrentIndex()).toBe(0);
		e.type("C");
		e.type("a");
		expect(e.getCurrentIndex()).toBe(2);
	});

	it("Should not proceed on incorrect input", () => {
		const e = Exercise.startExercise(sentenceParts);
		expect(e.getCurrentIndex()).toBe(0);
		e.type("C");
		e.type("a");
		expect(e.getCurrentIndex()).toBe(2);
		e.type(".");
		expect(e.getCurrentIndex()).toBe(2);
	});

	it("Should fix wrong spacing", () => {
		const copy = [...sentenceParts];
		copy.unshift("   first.   ");
		const e = Exercise.startExercise(copy);
		expect(e.getCurrentIndex()).toBe(0);
		e.type("f");
		expect(e.getCurrentIndex()).toBe(1);
		e.type("i");
		expect(e.getCurrentIndex()).toBe(2);
		e.type("r");
		expect(e.getCurrentIndex()).toBe(3);
		e.type("s");
		expect(e.getCurrentIndex()).toBe(4);
		e.type("t");
		expect(e.getCurrentIndex()).toBe(5);
		e.type(".");
		expect(e.getCurrentIndex()).toBe(6);
		e.type(" ");
		expect(e.getCurrentIndex()).toBe(7);
		e.type("C");
		expect(e.getCurrentIndex()).toBe(8);
	});
});

describe("Event listeners", () => {
	it("Should be able to add onSuccess listener", (done) => {
		const e = Exercise.startExercise(sentenceParts);
		e.on("success", () => {
			expect(true).toBe(true);
			done();
		});
		e.type("C");
	});

	it("Should be able to add onError listener", (done) => {
		const e = Exercise.startExercise(sentenceParts);

		e.on("success", () => {
			expect(false).toBe(true);
			done();
		});

		e.on("error", () => {
			expect(true).toBe(true);
			done();
		});
		e.type("w");
	});

	it("Should be able to add onErrorCountChange listener", (done) => {
		const e = Exercise.startExercise(sentenceParts);
		let count = 1;
		e.on("errorCountChange", (callBackValue: number) => {
			expect(callBackValue).toEqual(count++);
			if (count === 4) {
				expect(true).toBe(true);
				done();
			}
		});

		e.type("C");
		e.type("a");
		e.type("a");
		e.type("a");
		e.type("a");
		e.type("a");
		e.type("r");
		e.type("a");
		e.type("l");
		e.type(" ");
		e.type("w");
		e.type("C");
	});
});
