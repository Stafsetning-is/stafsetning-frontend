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
import { FilterOuter, Header } from "./styles";
import GrammarRules from "./GrammarRules";
import Compartment from "./Compartment";
import FilterButton from "./QuickFilterButton";
import { SLIDER_PROPS, FILTER_BUTTONS } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
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
	sidebarVisible,
}: IProps) => {
	return (
		<AuthHider setAuthLevel="user">
			<FilterOuter theme={{ open: sidebarVisible }}>
				<Header>
					<span>Leita</span>
					<FontAwesomeIcon icon={faWindowClose} />
				</Header>
				<Compartment label="Málfræði reglur">
					<GrammarRules />
				</Compartment>
				<Compartment label="Lengd æfingar">
					<DoubleSlider
						{...SLIDER_PROPS}
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
				<Compartment label="Flýtileiðir">
					{FILTER_BUTTONS.map((button) => (
						<FilterButton
							text={button.label}
							selected={quickFilter === button.quickFilter}
							onClick={setQuickFilter}
							quickFilter={button.quickFilter}
						/>
					))}
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
