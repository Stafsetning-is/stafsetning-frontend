import React from "react";
import { Outer, DropdownWrapper } from "./styles";
import { DropDown } from "../../../../../../components";
import { StartOfDifficultyRange, EndOfDifficultyRange } from "./formRecipe";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { setStartRange, setEndRange } from "../../../../actions";
import { IProps } from "./interface";

/**
 * Displays the two drop downs for selecting the difficulty range
 * for an exercise
 */
const Component = ({
	startRange,
	endRange,
	setStartRange,
	setEndRange,
}: IProps) => {
	return (
		<Outer>
			<DropdownWrapper>
				<DropDown
					{...StartOfDifficultyRange}
					onChange={setStartRange}
					value={startRange}
				/>
			</DropdownWrapper>
			<DropdownWrapper>
				<DropDown
					{...EndOfDifficultyRange}
					onChange={setEndRange}
					value={endRange}
				/>
			</DropdownWrapper>
		</Outer>
	);
};

const mapStateToProps = (state: StoreState) => ({
	...state.publisher,
});

export default connect(mapStateToProps, { setStartRange, setEndRange })(
	Component
);
