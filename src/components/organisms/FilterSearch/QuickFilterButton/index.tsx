import React from "react";
import { IProps } from "./interface";
import FilterToggleBox from "../FilterToggleBox";

/**
 * Holds a toggle button for the filter menu.
 * There is only one option at a time.
 */
export default ({ onClick, selected, text, quickFilter }: IProps) => {
    const selectOnToggle = selected ? "none" : quickFilter;

    const handleClick = () => {
        onClick(selectOnToggle);
    };

    return (
        <FilterToggleBox
            onClick={handleClick}
            name={text}
            selected={selected}
        ></FilterToggleBox>
    );
};
