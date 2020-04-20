import { Exercise } from "../utils";

const sentenceParts = [
	"Carl went out to the shop",
	"to buy some groceries",
	"for his mom",
];

const shortSentenceParts = ["Carl", "to", "for"];

describe("Initialize exercise and input", () => {
	it("should be able to create exercse", () => {
		Exercise.startExercise(sentenceParts, "5");
		expect(true).toBe(true);
	});

	it("Should take input, not depending on correctness", () => {
		const e = Exercise.startExercise(sentenceParts, "5");
		e.type("C");
		e.type("a");
		e.type(".");
		expect(true).toBe(true);
	});

	it("Should not proceed on correct input input", () => {
		const e = Exercise.startExercise(sentenceParts, "5");
		expect(e.getCurrentIndex()).toBe(0);
		e.type("C");
		e.type("a");
		expect(e.getCurrentIndex()).toBe(2);
	});

	it("Should not proceed on incorrect input", () => {
		const e = Exercise.startExercise(sentenceParts, "5");
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
		const e = Exercise.startExercise(copy, "5");
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
		expect(e.getCurrentIndex()).toBe(7);
		e.type(" ");
		expect(e.getCurrentIndex()).toBe(7);
		e.type("C");
		expect(e.getCurrentIndex()).toBe(8);
	});
});

describe("Event listeners", () => {
	it("Should be able to add onSuccess listener", (done) => {
		const e = Exercise.startExercise(sentenceParts, "5");
		e.on("success", () => {
			expect(true).toBe(true);
			done();
		});
		e.type("C");
	});

	it("Should be able to add onError listener", (done) => {
		const e = Exercise.startExercise(sentenceParts, "5");

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
		const e = Exercise.startExercise(sentenceParts, "5");
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

	it("Should call on finish when finished", (done) => {
		const e = Exercise.startExercise(shortSentenceParts, "5");
		e.on("complete", () => {
			expect(true).toBe(true);
			done();
		});
		e.type("C");
		e.type("a");
		e.type("r");
		e.type("l");
		e.type(" ");
		e.type("t");
		e.type("o");
		e.type(" ");
		e.type("f");
		e.type("o");
		e.type("r");
	});
});

describe("Traversing sentence parts and getting preview", () => {
	it("should recognize what sentence part it is in", () => {
		const e = Exercise.startExercise(shortSentenceParts, "5");
		expect(e.currentPart()).toEqual(0);
		e.type("C");
		expect(e.currentPart()).toEqual(0);
		e.type("a");
		expect(e.currentPart()).toEqual(0);
		e.type("r");
		expect(e.currentPart()).toEqual(0);
		e.type("l");
		expect(e.currentPart()).toEqual(0);
		e.type(" ");
		expect(e.currentPart()).toEqual(1);
		e.type("t");
		expect(e.currentPart()).toEqual(1);
		e.type("o");
		expect(e.currentPart()).toEqual(1);
		e.type(" ");
		expect(e.currentPart()).toEqual(2);
		e.type("f");
		expect(e.currentPart()).toEqual(2);
		e.type("o");
		expect(e.currentPart()).toEqual(2);
	});
});

describe("text update event shows typed text and preview appropriately", () => {
	it("should be able to add textUpdate event listener", (done) => {
		const e = Exercise.startExercise(shortSentenceParts, "5");
		let count = 0;
		e.on("textUpdate", (text, preview) => {
			if (count === 0) {
				expect(text).toEqual("");
				expect(preview).toEqual("Carl");
				done();
			} else if (count === 1) {
				expect(text).toEqual("C");
				expect(preview).toEqual("");
				done();
			} else if (count === 2) {
				expect(text).toEqual("Ca");
				expect(preview).toEqual("");
				done();
			} else if (count === 3) {
				expect(text).toEqual("Ca");
				expect(preview).toEqual("rl");
				done();
			}
			count++;
		});
		e.showPreview();
		e.type("C");
		e.type("a");
		e.showPreview();
	});
});
