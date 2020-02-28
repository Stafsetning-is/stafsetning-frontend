import * as React from "react";
import { InputComponent } from "../../../services";
import { TextInput, PasswordInput } from "../../";

/**
 * This functional component takes in input component props and
 * returns the specified component needed.
 */
export const InputFactory = (props: InputComponent) => {
    switch (props.type) {
        case "text-input":
            return <TextInput {...props} />;
        case "password-input":
            return <PasswordInput {...props} />;
    }
};
