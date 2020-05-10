import React from "react";
import { Outer, Split, RemoveSplit, LeftOverlay, RightOverlay } from "./styles";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Functional component that displays a char
 * in the splitter veiw. It also adds the split
 * if there is a split present
 */
export default ({
	letter,
	split,
	onSplitAdd,
	onSplitRemove,
	onAddSplitAfterChar,
}: IProps) => {
	return (
		<Outer>
			<LeftOverlay onClick={onSplitAdd} />
			<RightOverlay onClick={onAddSplitAfterChar} />
			{split !== "none" ? (
				<Split theme={{ split }}>
					<RemoveSplit
						onClick={(e) => {
							e.stopPropagation();
							onSplitRemove();
						}}
					>
						<FontAwesomeIcon icon={faTimes} />
					</RemoveSplit>
				</Split>
			) : null}
			{letter === " " ? "   " : letter}
		</Outer>
	);
};
