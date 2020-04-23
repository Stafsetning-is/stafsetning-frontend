import React from "react";
import { DoubleSlider } from "../../";
import {
	setHideCompleted,
	setMaxWordCount,
	setMinWordCount,
	setQuickFilter,
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
	setMaxWordCount,
	setMinWordCount,
	maxWordCount,
	minWordCount,
	setQuickFilter,
	quickFilter,
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
						selected={quickFilter === "hide-completed"}
						onClick={setQuickFilter}
						quickFilter="hide-completed"
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
	setQuickFilter,
})(FilterComponent);
