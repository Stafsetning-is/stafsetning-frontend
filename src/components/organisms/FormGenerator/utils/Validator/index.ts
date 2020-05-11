import { InputElementRecipe, CharacterTypes } from "../../../../../services";

type ValidationMethod = (field: InputElementRecipe) => void;

/**
 * Class that has one public static method
 * that is: check()
 *
 * Check takes in an input field
 * and updates the validation message
 * if it does not validate correctly
 * according to the validation object
 * in InputElementRecipe
 *
 * To create a new validation method make
 * sure that it conforms to the ValidationMethod type
 * and then add it to the validationMethods array
 *
 */
export default class Validator {
    /**
     * Validates the inputElmenetRecipe according
     * to the user specified validation
     * @param field the field to validate
     */
    public static check(field: InputElementRecipe) {
        if (!field.validation) return;
        /**
         * Possibility of type errors on runtime
         * try catch will thus catch the errors
         * and ignore them
         */
        Validator.clearError(field);
        try {
            Validator.validationMethods.forEach((method) => method(field));
        } catch (error) {}
    }

    /**
     * Validates minimum length of the field
     * @param field
     */
    private static valMinLength(field: InputElementRecipe) {
        const minLength = field.validation?.minLength;
        if (!minLength) return;
        Validator.handleResult(
            minLength > field.value.length,
            field,
            `Verður að vera að minnsta kosti ${minLength}`
        );
    }

    /**
     * Validates specified regex patterns and
     * if pattern does not match to field value
     * then user specified message is sent as
     * validation message
     * @param field
     */
    private static valRegexPattern(field: InputElementRecipe) {
        const pattern = field.validation?.pattern;
        if (!pattern) return;
        Validator.handleResult(
            !Validator.includesPattern(field.value, pattern.regex),
            field,
            pattern.message
        );
    }

    /**
     * User can specify forbidden character types
     * e.g. numbers, white-space, symbols, upper-case
     *
     * @param field
     */
    private static valForbiddenChars(field: InputElementRecipe) {
        const types = field.validation?.forbiddenCharacterTypes;
        if (!types) return;
        let includes = false;
        types.forEach((type) => {
            if (includes) return;
            includes = Validator.fieldHasCharType(type, field.value);
            Validator.handleResult(
                includes,
                field,
                `Má ekki innihalda ${Validator.mapToIcelandicName(type)}`
            );
        });
    }

    /**
     * User can specify required character types
     *
     * This method validates if those types exist in field value
     * if they should be there
     */
    private static valRequiredCharacters(field: InputElementRecipe) {
        const types = field.validation?.requiredCharacterTypes;
        if (!types) return;
        let includes = true;
        types.forEach((type) => {
            if (!includes) return;
            includes = Validator.fieldHasCharType(type, field.value);
            Validator.handleResult(
                !includes,
                field,
                `Verður að innihalda ${Validator.mapToIcelandicName(type)}`
            );
        });
    }

    /**
     * Reusable method thet checks if
     * value has a character type
     */
    private static fieldHasCharType(type: CharacterTypes, value: any) {
        const regex = Validator.mapCharacterTypeToRegex(type);
        return !!value.toString().match(regex);
    }

    /**
     * Reusable method that
     * maps character types to regex patterns
     * @param type the character type to use as lookup key
     */
    private static mapCharacterTypeToRegex(type: CharacterTypes) {
        return {
            letters: new RegExp(/[a-zA-Z]/, "g"),
            numbers: new RegExp(/[0-9]/, "g"),
            symbols: new RegExp(/[^\w\s]/, "g"),
            "white-space": new RegExp(/\s/, "g"),
            "lower-case": new RegExp(/[a-z]/, "g"),
            "upper-case": new RegExp(/[A-Z]/, "g")
        }[type];
    }

    /**
     * method that maps character type
     * to the icelandic translation of said character type
     * in (ft. þolfall)
     * @param type the cahracter type to use as lookupkey
     */
    private static mapToIcelandicName(type: CharacterTypes) {
        return {
            letters: "bókstafi",
            numbers: "tölustafi",
            symbols: "tákn",
            "white-space": "bil",
            "lower-case": "lítinn staf",
            "upper-case": "stóran staf"
        }[type];
    }

    /**
     * If user wants the value trimmed then
     * this method makes sure that no space
     * is entered
     * @param field
     */
    private static trim(field: InputElementRecipe) {
        const trim = field.validation?.trim;
        if (!trim) return;
        field.value = field.value.trim();
    }

    /**
     * Reusable method to check if pattern exists
     * in value
     * @param value Value to do regex lookup in
     * @param pattern pattern to match in value
     */
    private static includesPattern(value: any, pattern: RegExp) {
        return !!value.toString().match(pattern);
    }

    /**
     * Handles the result by checking if its valid
     * if it is valid then we set an error message to the field
     * @param valid is the field valid?
     * @param field the input element recipe
     * @param message string message
     */
    private static handleResult(
        valid: boolean,
        field: InputElementRecipe,
        message: string
    ) {
        if (valid) Validator.setErrorMessage(field, message);
    }

    /**
     * Reusable method to set error message to field
     * @param field
     * @param message
     */
    private static setErrorMessage(field: InputElementRecipe, message: string) {
        field.validationMessage = message;
    }

    /**
     * Cleans the error parameter in input element
     * @param field The input element recipe
     */
    private static clearError(field: InputElementRecipe) {
        field.valid = true;
        field.validationMessage = "";
    }

    /**
     * Array of validation methods that is iterated
     * through when validation is to take place
     */
    private static validationMethods: ValidationMethod[] = [
        Validator.valMinLength,
        Validator.valRegexPattern,
        Validator.trim,
        Validator.valForbiddenChars,
        Validator.valRequiredCharacters
    ];
}
