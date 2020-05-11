import React, { useState, useEffect } from "react";
import { Outer, Button, Choices } from "./styles";
import Selection from "./Selection";
import { DropDownComponent } from "../../../services";
import { FormLabel } from "../../";

/**
 * DropDown element for forms
 */
export const DropDown = ({
    value,
    onChange,
    label,
    placeholder,
    validationMessage,
    selections
}: DropDownComponent) => {
    const [isOpen, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("");

    // opens or keeps open
    const open = () => setOpen(true);
    // closes or keeps closed
    const close = () => setOpen(false);

    /**
     * Handles the logic of
     * selecting a value and returning said value to form
     * @param value The value selectted
     */
    const handleSelection = (value: any, text: string) => {
        onChange(value);
        close();
    };
    /**
     * Returns validation message
     */
    const getValidationMessage = () => {
        if (!value) return "";
        return validationMessage ?? "";
    };

    /**
     * Sets the button text to placeholder when component
     * mounts
     */
    useEffect(() => {
        const selected = selections.find((item) => item.value === value);
        console.log("selected", selected);
        if (selected) setButtonText(selected.text);
        else setButtonText(placeholder || "");
    }, [placeholder, selections, value]);

    /**
     * Renders the drop down list
     */
    const DropDownList = () => {
        if (!isOpen) return null;
        return (
            <Choices>
                {selections.map(({ value, text }) => (
                    <Selection
                        value={value}
                        text={text}
                        onClick={() => handleSelection(value, text)}
                    />
                ))}
            </Choices>
        );
    };

    return (
        <div>
            <FormLabel text={label} errorMessage={getValidationMessage()} />
            <Outer onMouseLeave={close}>
                <Button onClick={open}>{buttonText}</Button>
                <DropDownList />
            </Outer>
        </div>
    );
};
