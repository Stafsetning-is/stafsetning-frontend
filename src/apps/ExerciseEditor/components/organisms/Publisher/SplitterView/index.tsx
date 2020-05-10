import React from "react";
import { SplitType } from "../interface";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { addSplit, removeSplit } from "../../../../actions";
import Char from "../Char";

/**
 * Maps the character to an array of characters
 *
 * it adds splits where the user has added them
 */
const Component = ({ text, splits, addSplit, removeSplit }: IProps) => {
	// text to char array with an space at the end
	const charArray = [...text.split(""), " "];

	return (
		<React.Fragment>
			{charArray.map((letter, i) => {
				let splitType: SplitType = "none";
				const isFirstChar = i === 0;
				const isLastChar = i === charArray.length - 1;
				if (isFirstChar || isLastChar || splits.includes(i))
					splitType = "closed-split";
				return (
					<Char
						letter={letter}
						split={splitType}
						onSplitAdd={() => addSplit(i)}
						onAddSplitAfterChar={() => addSplit(i + 1)}
						onSplitRemove={() => {
							if (isFirstChar) return;
							removeSplit(i);
						}}
					/>
				);
			})}
		</React.Fragment>
	);
};

const mapStateToProps = (state: StoreState) => ({
	splits: state.publisher.splits,
});

export default connect(mapStateToProps, { addSplit, removeSplit })(Component);
