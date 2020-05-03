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
						<FilterTitle>Leita</FilterTitle>
						<FontAwesomeIcon
							icon={faWindowClose}
							onClick={closeFilterSideBar}
						/>
					</Header>
					<Compartment label="Æfingar sem innihalda">
						<GrammarRules />
					</Compartment>
					<Compartment label="Fjöldi orða">
						<DoubleSlider
							{...SLIDER_PROPS}
							value={sliderValue}
							onChange={sliderMovement}
							type="text-input"
						/>
					</Compartment>
					<Compartment label="Flýtileiðir">
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
