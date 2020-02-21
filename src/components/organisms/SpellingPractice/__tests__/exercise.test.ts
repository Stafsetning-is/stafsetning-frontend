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

describe("Should be able to add event listeners", () => {});

export {};
