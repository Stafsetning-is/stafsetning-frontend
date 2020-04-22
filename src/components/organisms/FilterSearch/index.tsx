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
import GrammarRules from "./GrammarRules";
import Compartment from "./Compartment";
import FilterButton from "./FilterButton";
import { sliderProps } from "./utils";
/**
 * Filter menu for search on front page
 */
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
				<Compartment>
					<GrammarRules />
				</Compartment>
				<Compartment>
					<DoubleSlider
						{...sliderProps}
						value={{
							min: minWordCount,
							max: maxWordCount,
						}}
						onChange={({ min, max }) => {
							setMaxWordCount(max);
							setMinWordCount(min);
						}}
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
