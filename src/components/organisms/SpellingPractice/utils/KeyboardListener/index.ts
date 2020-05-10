import { IGNORE_CODES_ARRAY, SPECIAL_CHARS, ACCENT_MAP } from "./utils";

/**
 * A class which, on instantiation, creates an event listener
 * for a keyboard input.
 *
 * keyboard event listeners in javascript
 * don't work with characters but instead character codes.
 *
 * This class starts the listener with a public static
 * .listen method that takes a callback which puts
 * the typed char in as callback parameter
 *
 * It goes through all the tedious logic of handling
 * special characters, ignoring unwanted keys
 * spaces, accents and icelandic characters
 *
 * It encapsulates this logic and only returns the forementioned
 * event listener which simply returns the character
 */
export default class KeyboardListener {
    private accented: boolean = false;
    private cb: (key: string) => void;

    /**
     * Start listening for keyboard input
     * @param cb callback that is fired when key is pressed and delivers the character
     */
    public static listen(cb: (char: string) => void) {
        return new KeyboardListener(cb);
    }

    public stop() {
        document.body.removeEventListener("keydown", this.onPress);
    }

    /**
     * Private constructor
     * only available through public static methods
     * @param cb the callback given from user
     */
    private constructor(cb: any) {
        this.listen();
        this.cb = cb;
    }

    /**
     * Starts listening for input
     */
    private listen() {
        document.body.addEventListener("keydown", this.onPress);
    }
    /**
     * NOTE: Arrow function needed for this binding
     *
     * This function is fired on keypress
     * and does all the necessary manipulation
     * on the char string to deliver the correct
     * character based on user wishes
     */
    private onPress = (e: KeyboardEvent) => {
        e.preventDefault();
        let char = "";
        char = e.key;
        console.log("char", char);
        char = this.accentCharIfShould(char, e);
        char = this.capitalizeCharIfShould(char, e);
        char = this.replaceSpecialCharIfShould(char, e);
        if (!this.shouldIgnore(e)) this.cb(char);
        this.handleSpecialEvents(e);
    };

    /**
     * Returns a boolean by checking
     * if the keyCode is an array
     * of keycodes to ignore
     * OR
     * if the cmd key is being held down
     * @param e Keyboard event
     */
    private shouldIgnore(e: KeyboardEvent) {
        return IGNORE_CODES_ARRAY.includes(e.keyCode) || e.metaKey;
    }

    /**
     * Returns capitalized character if user
     * wants capitalized character
     * @param char character received
     * @param e keyboard event
     */
    private capitalizeCharIfShould(char: string, e: KeyboardEvent) {
        if (e.shiftKey || e.getModifierState("CapsLock"))
            return char.toLocaleUpperCase();
        return char;
    }

    /**
     * Returns accented character
     * if user wants an accented
     * character
     * @param char the character typed in
     * @param e  keyboard event
     */
    private accentCharIfShould(char: string, e: KeyboardEvent) {
        if (this.accented && ACCENT_MAP[char]) return ACCENT_MAP[char];
        else return char;
    }

    /**
     * Replaces with special characters, e.g. space
     * @param char character
     * @param e keyboard event
     */
    private replaceSpecialCharIfShould(char: string, e: KeyboardEvent) {
        if (char === "space") {
            return " ";
        }
        return char;
    }

    /**
     * Calls the array of special events
     * that can be used to call many
     * special calls that need to be processed
     * after the input
     * @param e keyboard event
     */
    private handleSpecialEvents(e: KeyboardEvent) {
        this.adjustAccentFlag(e);
    }

    /**
     * SPECIAL EVENT
     * Adjusts the accent flag
     * @param e keyboard event
     */
    private adjustAccentFlag(e: KeyboardEvent) {
        if (e.keyCode === SPECIAL_CHARS.accent || e.key === "Dead")
            this.accented = true;
        else if (IGNORE_CODES_ARRAY.includes(e.keyCode) && this.accented)
            return;
        else this.accented = false;
    }
}
