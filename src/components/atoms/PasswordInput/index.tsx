import * as React from "react";
import { InputComponent } from "../../../services";

/**
 * Password input that takes in value and onChange function
 * This is for the form functionality
 */
export const PasswordInput = ({ value, onChange }: InputComponent<string>) => {
    return (
        <input
            type="password"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};
