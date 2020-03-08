import React from "react";
import { BasicButton, DoubleSlider } from "../../";
import {
	setHideCompleted,
	setMaxWordCount,
	setMinWordCount
} from "../../../actions";
import { connect } from "react-redux";
import { IProps } from "./interface";

const FilterComponent = ({ hideCompleted, setMax, setMin }: IProps) => {
	return (
		<React.Fragment>
			<BasicButton
				type="default"
				text="hide completed"
				onClick={() => hideCompleted(true)}
			/>
			<DoubleSlider
				value={{
					min,
					max
				}}
				onChange={({ min, max }) => {
					setMax(max);
					setMin(min);
				}}
				label="Lengt a aaefingu"
				type="text-input"
			/>
		</React.Fragment>
	);
};

export const FilterSearch = connect(() => ({}), {
	hideCompleted: setHideCompleted,
	setMin: setMinWordCount,
	setMax: setMaxWordCount
})(FilterComponent);
