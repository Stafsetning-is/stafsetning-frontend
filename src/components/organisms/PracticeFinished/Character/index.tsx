import React, { useState } from "react";
import { IProps } from "./interface";
import { CharSpan, ErrSpan, TypedError } from "./styles";

/**
 * This Character component will descibe the error in more detail
 * This relates to the way each individual character that was wrongly typed is shown
 */

export default ({ char, error }: IProps) => {
    const [showError, setShowError] = useState(false);

    /**
     * here if the error is null or essentially not a erro it will receive a null value
     */
    if ({ error } === null) {
        const typedError = null;
    }
    const typedError = <TypedError>{error}</TypedError>;

    /** However if the supposed error truly is an error, the if(error) will be true
     * and will return the character and the wrongly typed character aswell
     */
    if (error)
        return (
            <ErrSpan>
                {char}
                {typedError}
            </ErrSpan>
        );
    return <CharSpan>{char}</CharSpan>;
};
