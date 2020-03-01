import * as React from "react";
import { InputComponent } from "../../../services";
import { TextInputTitle, TextInputField } from "./styles";

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
            <TextInputTitle>{label}</TextInputTitle>
            <TextInputField>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </TextInputField>
        </React.Fragment>
    );
};
