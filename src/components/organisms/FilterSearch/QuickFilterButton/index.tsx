import React from "react";
import { IProps } from "./interface";
import FilterToggleBox from "../FilterToggleBox";

/**
 * Toogle button for filter menu
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
