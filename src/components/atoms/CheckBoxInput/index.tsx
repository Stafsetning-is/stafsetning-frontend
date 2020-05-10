import * as React from "react";
import { InputComponent } from "../../../services";
import { FormLabel } from "..";
import Toggle from "react-toggle";
import { ToggleWrapper } from "./styles";
/**
 * BoxInput that takes in value and onChange function
 * This is for the Form functionality
 */
/**
 *
 * @param value is the input from the user
 * @param onChange listens to if the value has been changed
 * @param label describes the input form, can be thought of as a title
 * @param placeholder describes and gives the user an idea of what they should input
 * @param getValidationMessage
 */
export const CheckBoxInput = ({
    value,
    onChange,
    label,
    placeholder,
    validationMessage,
}: InputComponent) => {
    /**
     * Returns validation message depending on if there is a value or not
     */
    const getValidationMessage = () => {
        if (!value) return "";
        return validationMessage ?? "";
    };
    /*returns the validation message be it an error or success message within the form*/
    return (
        <React.Fragment>
            <FormLabel text={label} errorMessage={getValidationMessage()} />
            <ToggleWrapper>
                <Toggle
                    defaultChecked={value}
                    onChange={(e) => onChange(e.target.checked)}
                />
            </ToggleWrapper>
        </React.Fragment>
    );
};
