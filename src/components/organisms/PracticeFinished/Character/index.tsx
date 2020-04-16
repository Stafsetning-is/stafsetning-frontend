import React, { useState } from "react";
import { IProps } from "./interface";
import { CharSpan, ErrSpan, TypedError } from "./styles";

/**
 * This Character component will descibe the error in more detail
 * This relates to the way each individual character that was wrongly typed is shown
 */

export default ({ char, error }: IProps) => {
    const [showError, setShowError] = useState(false);

    /**here the error highlight will be
     * predefined as common mistakes made with symbols */
    if (error === " ") error = "óþarfa bil";
    if (error === ".") error = "óþarfa punktur";
    if (error === ",") error = "óþarfa komma";
    // var regexpAlphabetChar = new RegExp(/^[a-zA-Z]/);
    // if (error) {
    //     var errorChar = error.charAt(0);
    //     if (!regexpAlphabetChar.test(errorChar)) {
    //         error = "hvad gerdis her?";
    //     }
    // }

    /**
     * here if the error is null or essentially not a erro it will receive a null value
     */
    const typedError = showError ? <TypedError>{error}</TypedError> : null;

    /** However if the supposed error truly is an error, the if(error) will be true
     * and will return the character and the wrongly typed character aswell
     */
    if (error)
        return (
            /**
             * here the onMouse will show the error message
             */
            <ErrSpan
                onMouseEnter={() => setShowError(true)}
                onMouseLeave={() => setShowError(false)}
            >
                {char}
                {typedError}
            </ErrSpan>
        );
    return <CharSpan>{char}</CharSpan>;
};
