import KeyboardListener from "../KeyboardListener";
import { SPACE, SpellingTypeEvents } from "./utils";
import { SessionStorageService } from "../../../../../services";
import { CachedExercise, Error, Report, Options } from "./interface";

export class Exercise {
	/**
	 * Decleration of all class variables
	 * that will be used
	 */
	private exerciseParts: string[];
	private typingAt: number;
	private errorFlag: boolean;
	private errorCount: number;
	private text: string;
	private partCount: number;
	private partIndexes!: number[];
	private currentPartNumber: number;
	private errorCountChange!: (i: number) => void;
	private clearTextTimeout!: number;
	private id: string;
	private success!: () => void;
	private error!: () => void;
	private complete!: (report: Report) => void;
	private textUpdate!: (typed: string, preview: string) => void;
	private nextCharChange!: (nextChar: string) => void;
	private listener: KeyboardListener;
	private silentMode = true;
	private errors: Error[];
	private options: Options;

	/**
	 * Private constructor that
	 * starts the exercise and inits variables
	 * @param exerciseParts the parts of the exercise
	 */
	private constructor(exerciseParts: string[], id: string, options: Options) {
		this.exerciseParts = exerciseParts;
		this.cleanParts();
		this.typingAt = 0;
		this.errorFlag = true;
		this.errorCount = 0;
		this.text = "";
		this.partCount = exerciseParts.length;
		this.currentPartNumber = 0;
		this.createPartIndexArray();
		this.id = id;
		this.silentMode = false;
		this.errors = [];
		this.listener = KeyboardListener.listen((key) => {
			this.type(key);
		});
		this.options = options;
	}

	public stopListening() {
		this.success = this.error = this.complete = this.textUpdate = () => {};
		this.listener.stop();
	}

	/**
	 * Gets the cache key for
	 * this exercise
	 */
	private exerciseCacheKey() {
		return this.id;
	}

	/**
	 * Returns the current errorCount
	 */
	public getErrorCount() {
		return this.errorCount;
	}

	public setAlwaysShowPreview(value: boolean) {
		this.options.alwaysShowPreview = value;
		this.emitText();
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
		this.doCallBack("nextCharChange");
		this.validateCompleted();
		this.emitText(false);
		this.traverseToNextSentencePart();
		this.doCallBack("success");
	}

	private validateCompleted() {
		if (this.typingAt !== this.getText().length) return;
		this.doCallBack("complete");
	}

	/**
	 * Accepts the single most recent character
	 * at user input and proceeds accordingly
	 * @param input single character from user
	 */
	public type(input: string) {
		if (this.typingAt === this.text.length) return;
		try {
			this.handleSpaceAtBeginningOfWord(input);
			if (input === this.getNextChar()) this.advance();
			else this.handleError(input);
			if ([",", "."].includes(input)) this.type(" ");
		} catch (e) {
			// do nothing
		}
		this.addToSessionStorage(input);
	}

	/**
	 * Adds last typed char to session storage
	 * @param char
	 */
	private addToSessionStorage(char: string) {
		if (process.env.NODE_ENV === "test") return;
		const prevVal = SessionStorageService.get<CachedExercise>(
			this.exerciseCacheKey()
		);
		if (prevVal === null)
			SessionStorageService.put<CachedExercise>(this.exerciseCacheKey(), {
				typed: char,
				errorFlag: this.errorFlag,
				errors: this.errors,
			});
		else
			SessionStorageService.put<CachedExercise>(this.exerciseCacheKey(), {
				typed: prevVal.typed + char,
				errorFlag: this.errorFlag,
				errors: this.errors,
			});
	}

	/**
	 * Boolean logic to decide if input
	 * should be ignored or not
	 * @param char last typed char
	 */
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
	private handleError(char: string) {
		this.doCallBack("error");
		if (this.errorFlag === false) {
			this.incrementErrorCount();
			this.logError(char);
		}
		this.errorFlag = true;
	}

	/**
	 * Logs the error
	 * @param char character just typed
	 */
	private logError(char: string) {
		this.errors.push({ error: char, charAt: this.typingAt });
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
		if (this.silentMode) return;
		switch (cb) {
			case "complete":
				SessionStorageService.put(this.exerciseCacheKey(), null);
				if (this[cb]) this.complete(this.getReport());
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
			case "nextCharChange":
				if (this[cb])
					this.nextCharChange(this.getText().charAt(this.typingAt));
		}
	}

	private getReport(): Report {
		return {
			errorItems: this.errors,
			exerciseString: this.getText(),
			duration: 69,
			exercise: this.id,
		};
	}

	/**
	 * Returns the preview text
	 * which is untyped text until
	 * next sentence part
	 */
	private getPreviewText() {
		const startOfNext = this.partIndexes[1];
		return this.getText().slice(this.typingAt, startOfNext);
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
		this.clearTextTimeout = setTimeout(
			this.clearPreview,
			this.options.previewTTL * 1000
		);
	}

	private handleSpaceBeforePreview() {
		if (this.getNextChar() === SPACE) this.type(SPACE);
	}

	public setPreviewTimeToLive(seconds: number) {
		this.options.previewTTL = seconds;
	}

	/**
	 * Removes just the preview from
	 * text change callback event
	 */
	private clearPreview = () => {
		this.emitText(false);
	};

	/**
	 * emits text change callback
	 * @param preview should preview be included
	 */
	public emitText(preview?: boolean) {
		if (!this.textUpdate || this.silentMode) return;
		this.textUpdate(
			this.getText().slice(0, this.typingAt),
			preview || this.options.alwaysShowPreview
				? this.getPreviewText()
				: ""
		);
		this.doCallBack("nextCharChange");
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
	public static startExercise(
		exerciseParts: string[],
		id: string,
		options: Options
	) {
		const instance = new Exercise(exerciseParts, id, options);
		return instance;
	}

	/**
	 * Returns current typing index
	 */
	public getCurrentIndex() {
		return this.typingAt;
	}

	public timeAtPreview = 0;
}
