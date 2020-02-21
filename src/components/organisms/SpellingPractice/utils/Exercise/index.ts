type SpellingTypeEvents = "error" | "errorCountChange" | "success" | "complete";

export class Exercise {
	private exerciseParts: string[];
	private typingAt: number;
	private errorFlag: boolean;
	private errorCount: number;
	private text: string;
	private errorCountChange!: (i: number) => void;
	private success!: () => void;
	private error!: () => void;
	private complete!: () => void;

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
	}

	/**
	 * Add an callback to a predefined event listener
	 * thats allowed in instance of class
	 * @param type predefined type of event
	 * @param cb call back to execute on event, will overwrite older calllbacks
	 */
	public on(type: SpellingTypeEvents, cb: (param?: any) => void) {
		this[type] = cb;
	}

	/**
	 * implements the advance functionality
	 * when a user should advance +1
	 */
	private advance() {
		this.typingAt += 1;
		this.doCallBack("success");
		this.errorFlag = false;
		this.validateCompleted();
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
		if (input === this.getNextChar()) this.advance();
		else this.handleError();
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
				if (this[cb]) this[cb]();
				break;
		}
	}

	/**
	 * Returns the character that user
	 * SHOULD return next
	 */
	private getNextChar(): string {
		return this.getText().charAt(this.typingAt);
	}

	/**
	 * Joins exercise parts to a single
	 * erxercise string
	 */
	private getText() {
		if (!this.text) this.text = this.exerciseParts.join(" ");
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
	 * public static method to create a new
	 * exercise by supplying array of strings.
	 * The function then returns an SpellingExercise
	 * instance
	 * @param exerciseParts array of exercise parts
	 */
	public static startExercise(exerciseParts: string[]) {
		return new Exercise(exerciseParts);
	}

	public getCurrentIndex() {
		return this.typingAt;
	}
}
