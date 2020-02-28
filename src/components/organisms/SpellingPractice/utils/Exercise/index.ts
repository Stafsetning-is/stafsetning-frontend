import keycode from "keycode";
import KeyboardListener from "../KeyboardListener";
import { SPACE } from "./utils";
type SpellingTypeEvents =
	| "error"
	| "errorCountChange"
	| "success"
	| "complete"
	| "textUpdate";

const PREVIEW_DURATION = 2500;

export class Exercise {
	private exerciseParts: string[];
	private typingAt: number;
	private errorFlag: boolean;
	private errorCount: number;
	private text: string;
	private partCount: number;
	private partIndexes!: number[];
	private currentPartNumber: number;
	private errorCountChange!: (i: number) => void;
	private success!: () => void;
	private error!: () => void;
	private complete!: () => void;
	private textUpdate!: (typed: string, preview: string) => void;
	private clearTextTimeout!: number;

	/**
	 * Private constructor that
	 * starts the exercise and inits variables
	 * @param exerciseParts the parts of the exercise
	 */
	private constructor(exerciseParts: string[]) {
		this.exerciseParts = exerciseParts;
		this.cleanParts();
		this.typingAt = 0;
		this.errorFlag = false;
		this.errorCount = 0;
		this.text = "";
		this.partCount = exerciseParts.length;
		this.currentPartNumber = 0;
		this.createPartIndexArray();
	}

	/**
	 * Counts the index of the starting position
	 * of each sentence part
	 */
	private createPartIndexArray() {
		const partLengths = this.exerciseParts.map((part) => part.length + 1);
		for (let i = 1; i < this.partCount; i++) {
			partLengths[i] += partLengths[i - 1];
		}
		this.partIndexes = partLengths;
		this.partIndexes.unshift(0);
		this.partIndexes.push(this.getText().length);
	}

	/**
	 * Returns the current sentence part
	 */
	public currentPart() {
		return this.currentPartNumber;
	}

	/**
	 * If we have completed the current sentence
	 * part then we go to the next one
	 */
	private traverseToNextSentencePart() {
		const switchToNextPositionAt = this.partIndexes[1];
		if (switchToNextPositionAt === undefined) return;
		if (this.typingAt === switchToNextPositionAt) {
			this.partIndexes.shift();
			this.currentPartNumber++;
			this.showPreview();
		}
	}

	/**
	 * Add an callback to a predefined event listener
	 * thats allowed in instance of class
	 * @param type predefined type of event
	 * @param cb call back to execute on event, will overwrite older calllbacks
	 */
	public on(
		type: SpellingTypeEvents,
		cb: (param1?: any, param2?: any) => void
	) {
		this[type] = cb;
		return this;
	}

	/**
	 * implements the advance functionality
	 * when a user should advance +1
	 */
	private advance() {
		this.typingAt += 1;
		this.errorFlag = false;
		this.validateCompleted();
		this.emitText(false);
		this.traverseToNextSentencePart();
		this.doCallBack("success");
	}

	private validateCompleted() {
		if (this.typingAt === this.getText().length) this.doCallBack("complete");
	}

	/**
	 * Accepts the single most recent character
	 * at user input and proceeds accordingly
	 * @param input single character from user
	 */
	public type(input: string) {
		try {
			this.handleSpaceAtBeginningOfWord(input);
			if (input === this.getNextChar()) this.advance();
			else this.handleError();
		} catch (e) {
			console.log(e.message);
		}
	}

	private handleSpaceAtBeginningOfWord(char: string) {
		if (
			char === SPACE &&
			this.getNextChar() !== SPACE &&
			this.getLastChar() === SPACE
		)
			throw Error("Keystroke should be ignored");
	}

	/**
	 * Handles functionality
	 * when an error in type()
	 * is made
	 */
	private handleError() {
		this.doCallBack("error");
		if (this.errorFlag === false) this.incrementErrorCount();
		this.errorFlag = true;
	}

	/**
	 * Increments the error count and does a callback to
	 * errorCountChange
	 */
	private incrementErrorCount() {
		this.errorCount++;
		this.doCallBack("errorCountChange", this.errorCount);
	}

	/**
	 * Does callback if requested by
	 * internal method. Does nothign
	 * if user has not supplied callback
	 * @param cb
	 */
	private doCallBack(cb: SpellingTypeEvents, param?: any) {
		switch (cb) {
			case "complete":
				if (this[cb]) this[cb]();
				break;
			case "error":
				if (this[cb]) this[cb]();
				break;
			case "errorCountChange":
				if (this[cb]) this.errorCountChange(param);
				break;
			case "success":
				if (this[cb]) this.success();
				break;
		}
	}

	private getPreviewText() {
		const startOfNext = this.partIndexes[1];
		return this.getText()
			.slice(this.typingAt, startOfNext)
			.trim();
	}

	/**
	 * Returns the character that user
	 * SHOULD return next
	 */
	private getNextChar(): string {
		return this.getText().charAt(this.typingAt);
	}

	private getLastChar(): string {
		if (this.typingAt > 0) return this.getText().charAt(this.typingAt - 1);
		else return this.getNextChar();
	}

	/**
	 * Joins exercise parts to a single
	 * erxercise string
	 */
	private getText() {
		if (!this.text) this.text = this.exerciseParts.join(SPACE);
		return this.text;
	}

	/**
	 * Cleans the text parts on input by
	 * trimming them
	 */
	private cleanParts() {
		this.exerciseParts = this.exerciseParts.map((text) => text.trim());
	}
	/**
	 * public function that fires
	 * the preview event
	 */
	public showPreview() {
		this.handleSpaceBeforePreview();
		this.emitText(true);
		this.timeAtPreview = new Date().getTime();
		if (this.clearTextTimeout) clearTimeout(this.clearTextTimeout);
		this.clearTextTimeout = setTimeout(this.clearPreview, PREVIEW_DURATION);
	}

	private handleSpaceBeforePreview() {
		if (this.getNextChar() === SPACE) this.type(SPACE);
	}

	private clearPreview = () => {
		this.emitText(false);
	};

	private emitText(preview?: boolean) {
		if (!this.textUpdate) return;
		this.textUpdate(
			this.getText().slice(0, this.typingAt),
			preview ? this.getPreviewText() : ""
		);
	}

	/**
	 * public static method to create a new
	 * exercise by supplying array of strings.
	 * The function then returns an SpellingExercise
	 * instance
	 * The function also starts an event listener
	 * for the keyboard
	 * @param exerciseParts array of exercise parts
	 */
	public static startExercise(exerciseParts: string[]) {
		const instance = new Exercise(exerciseParts);
		KeyboardListener.listen((key) => {
			instance.type(key);
		});
		return instance;
	}

	public getCurrentIndex() {
		return this.typingAt;
	}

	public timeAtPreview = 0;
}
