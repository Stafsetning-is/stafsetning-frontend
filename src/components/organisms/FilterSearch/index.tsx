import React from "react";
import { DoubleSlider } from "../../";
import {
	setHideCompleted,
	setMaxWordCount,
	setMinWordCount,
} from "../../../actions";
import { AuthHider } from "../../../hoc";
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
	setHideCompleted,
}: IProps) => {
	return (
		<AuthHider setAuthLevel="user">
			<FilterOuter>
				<Compartment> </Compartment>
				<Compartment>
					<DoubleSlider
						value={{
							min: minWordCount,
							max: maxWordCount,
						}}
						defaultValues={{
							min: 0,
							max: 200,
						}}
						onChange={({ min, max }) => {
							setMaxWordCount(max);
							setMinWordCount(min);
						}}
						passProps={{}}
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
				</Compartment>
			</FilterOuter>
		</AuthHider>
	);
};

const mapStateToPropss = (store: StoreState) => store.filter;

export const FilterSearch = connect(mapStateToPropss, {
	setHideCompleted,
	setMinWordCount,
	setMaxWordCount,
})(FilterComponent);
