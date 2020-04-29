import React from "react";
import { SplitType } from "../interface";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { addSplit, removeSplit } from "../../../../actions";
import Char from "../Char";

const Component = ({ text, splits, addSplit, removeSplit }: IProps) => {
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
