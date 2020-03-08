import React from "react";
import { BasicButton, DoubleSlider } from "../../";
import {
	setHideCompleted,
	setMaxWordCount,
	setMinWordCount
} from "../../../actions";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../reducers";
import { FilterOuter } from "./styles";
import Compartment from "./Compartment";
import FilterButton from "./FilterButton";

const FilterComponent = ({
	hideCompleted,
	setMaxWordCount,
	setMinWordCount,
	maxWordCount,
	minWordCount,
	setHideCompleted
}: IProps) => {
	return (
		<FilterOuter>
			<Compartment> </Compartment>
			<Compartment>
				<DoubleSlider
					value={{
						min: minWordCount,
						max: maxWordCount
					}}
					defaultValues={{
						min: 0,
						max: 200
					}}
					onChange={({ min, max }) => {
						setMaxWordCount(max);
						setMinWordCount(min);
					}}
					label="Lengd á æfingu"
					type="text-input"
				/>
			</Compartment>
			<Compartment>
				<FilterButton
					text="Fela þær sem ég er búinn með"
					value={hideCompleted}
					toggle={setHideCompleted}
				/>
				<FilterButton
					text="Sýna vistaðar æfingars"
					value={hideCompleted}
					toggle={setHideCompleted}
				/>
			</Compartment>
		</FilterOuter>
	);
};

const mapStateToPropss = (store: StoreState) => store.filter;

export const FilterSearch = connect(mapStateToPropss, {
	setHideCompleted,
	setMinWordCount,
	setMaxWordCount
})(FilterComponent);
