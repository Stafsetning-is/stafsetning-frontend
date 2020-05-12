import React, { useMemo } from "react";
import { DoubleSlider } from "../../";
import {
	setHideCompleted,
	setMaxWordCount,
	setMinWordCount,
	setQuickFilter,
	closeFilterSideBar,
	openFilterSideBar,
} from "../../../actions";
import { AuthHider, DifficultyHider } from "../../../hoc";
import { connect } from "react-redux";
import { IProps, SliderValues } from "./interface";
import { StoreState } from "../../../reducers";
import { FilterOuter, Header, OpenFilter, FilterTitle } from "./styles";
import GrammarRules from "./GrammarRules";
import Compartment from "./Compartment";
import FilterButton from "./QuickFilterButton";
import { SLIDER_PROPS, FILTER_BUTTONS } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faFilter } from "@fortawesome/free-solid-svg-icons";
/**
 * FilterSearch component holds the filter menu for
 * searching more specific exercises on the front page.
 * It is possible to hide filter and show it again many times.
 * It takes in the GrammarRules component, uses a word filter
 * slider and uses filter buttons.
 * All the choices a user makes is stored as a state in redux.
 */
const FilterComponent = ({
	setMaxWordCount,
	setMinWordCount,
	maxWordCount,
	minWordCount,
	setQuickFilter,
	quickFilter,
	sidebarVisible,
	closeFilterSideBar,
	openFilterSideBar,
}: IProps) => {
	const sliderMovement = (value: SliderValues) => {
		setMaxWordCount(value.max);
		setMinWordCount(value.min);
	};

	const sliderValue: SliderValues = useMemo(
		() => ({
			min: minWordCount,
			max: maxWordCount,
		}),
		[minWordCount, maxWordCount]
	);

	return (
		<AuthHider setAuthLevel="user">
			<DifficultyHider min={4} max={11}>
				<OpenFilter onClick={openFilterSideBar}>
					<FontAwesomeIcon icon={faFilter} />
				</OpenFilter>
				<FilterOuter theme={{ open: sidebarVisible }}>
					<Header>
						<FilterTitle>Leitarsía</FilterTitle>
						<FontAwesomeIcon
							icon={faWindowClose}
							onClick={closeFilterSideBar}
						/>
					</Header>
					<Compartment label="Stafsetningarregla">
						<GrammarRules />
					</Compartment>
					<Compartment label="Orðafjöldi">
						<DoubleSlider
							{...SLIDER_PROPS}
							value={sliderValue}
							onChange={sliderMovement}
							type="text-input"
						/>
					</Compartment>
					<Compartment label="Sýna">
						{FILTER_BUTTONS.map((button) => (
							<FilterButton
								key={button.label}
								text={button.label}
								selected={quickFilter === button.quickFilter}
								onClick={setQuickFilter}
								quickFilter={button.quickFilter}
							/>
						))}
					</Compartment>
				</FilterOuter>
			</DifficultyHider>
		</AuthHider>
	);
};

const mapStateToPropss = (store: StoreState) => store.filter;

export const FilterSearch = connect(mapStateToPropss, {
	setHideCompleted,
	setMinWordCount,
	setMaxWordCount,
	setQuickFilter,
	closeFilterSideBar,
	openFilterSideBar,
})(FilterComponent);
