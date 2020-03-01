import * as React from "react";
import { InputComponent } from "../../../services";
import { FormLabel } from "../FormLabel/index";
/**
 * Text input that takes in value and onChange function
 * This is for the form functionality
 */
export const TextInput = ({
    value,
    onChange,
    label,
    placeholder
}: InputComponent) => {
    return (
        <React.Fragment>
            <FormLabel text={label} />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </React.Fragment>
    );
};
