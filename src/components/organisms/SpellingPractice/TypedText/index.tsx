import React, { useState, useEffect } from "react";
import { SHAKE_DURATION } from "./utils";
import { TextSpan, PreviewSpan, TypedTextContainer, Cursor } from "./styles";
import { Shaky } from "../../../";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";

/**
 * Functional component that displays the text
 * can be controlled by parent through ref handlers
 * displays text during exercise
 * that user has typed along with
 *     - preview text
 *     - typing cursor
 *     - change font buttons
 *     - change font size buttons
 *     - change BG color
 */

const Component = ({
	typed,
	preview,
	fontSize,
	textBackground,
	error,
}: IProps) => {
	/**
	 * Stateful variables for the
	 * TypedText component
	 */
	const [showErrorFeedback, setShowErrorFeedback] = useState(error);

	/**
	 * Handles the "toggling off"
	 * when setShowErrorFeedback is toggled
	 * to true
	 */
	useEffect(() => {
		if (setShowErrorFeedback)
			setTimeout(() => setShowErrorFeedback(false), SHAKE_DURATION);
	}, [showErrorFeedback]);

	const showPreview = preview && ![" ", ""].includes(preview);

	return (
		<TypedTextContainer theme={{ fontSize, textBackground }}>
			<Shaky shake={showErrorFeedback}>
				<TextSpan>{typed}</TextSpan>
				<PreviewSpan>
					<Cursor theme={{ fontSize }} />
					{preview}
				</PreviewSpan>
			</Shaky>
		</TypedTextContainer>
	);
};
const mapStateToProps = (state: StoreState) => state.auth.user.preferences;

export default connect(mapStateToProps)(Component);
