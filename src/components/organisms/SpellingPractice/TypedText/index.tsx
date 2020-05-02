import React, {
	forwardRef,
	useImperativeHandle,
	useState,
	useEffect,
} from "react";
import { SHAKE_DURATION } from "./utils";
import { TextSpan, PreviewSpan, TypedTextContainer } from "./styles";
import { Shaky } from "../../../";
import { IProps } from "./interface";
import Cursor from "../Cursor";
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
const Component = forwardRef(
	({ typed, preview, fontSize, textBackground }: IProps, ref) => {
		/**
		 * Stateful variables for the
		 * TypedText component
		 */
		const [showErrorFeedback, setShowErrorFeedback] = useState(false);

		/**
		 * Handles the "toggling off"
		 * when setShowErrorFeedback is toggled
		 * to true
		 */
		useEffect(() => {
			if (setShowErrorFeedback)
				setTimeout(() => setShowErrorFeedback(false), SHAKE_DURATION);
		}, [showErrorFeedback]);

		/**
		 * shakes the text
		 */
		const giveErrorFeedback = () => {
			setShowErrorFeedback(true);
		};

		/**
		 * Opens these handlers to the
		 * outside
		 */
		useImperativeHandle(ref, () => ({
			giveErrorFeedback,
		}));

		const showPreview = preview && ![" ", ""].includes(preview);

		return (
			<React.Fragment>
				<TypedTextContainer theme={{ fontSize, textBackground }}>
					<Shaky shake={showErrorFeedback}>
						<TextSpan>{typed}</TextSpan>
						{showPreview ? <PreviewSpan>{preview}</PreviewSpan> : <Cursor />}
					</Shaky>
				</TypedTextContainer>
			</React.Fragment>
		);
	}
);

export const refObject = {
	giveErrorFeedback: () => {},
};

const mapStateToProps = (state: StoreState) => state.auth.user.preferences;

export default connect(mapStateToProps)(Component);
