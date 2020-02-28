import React, {
	forwardRef,
	useImperativeHandle,
	useState,
	useEffect,
	useMemo
} from "react";
import { Shaky } from "../../../";
import { TextSpan, PreviewSpan } from "./styles";
import Cursor from "../Cursor";
const SHAKE_DURATION = 500;

/**
 * Functional component that
 * can be controlled by parent through ref handlers
 * displays text during exercise
 * that user has typed along with
 *     - preview text
 *     - typing cursor
 */
export default forwardRef((_, ref) => {
	/**
	 * Stateful variables for the
	 * TypedText component
	 */
	const [text, setText] = useState("");
	const [previewText, setPreviewText] = useState("");
	const [showErrorFeedback, setShowErrorFeedback] = useState(false);

	/**
	 * Handles the "toggling off"
	 * when setShowErrorFeedback is toggled
	 * to true4
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
		setText,
		setPreviewText
	}));

	/**
	 * Memos previewstring
	 * or cursor
	 *
	 * only changes memo when previewText updates
	 */
	const TypedTextFollowUp = useMemo(() => {
		if (previewText) return <PreviewSpan>{previewText}</PreviewSpan>;
		else return <Cursor />;
	}, [previewText]);

	return (
		<Shaky shake={showErrorFeedback}>
			<TextSpan>{text}</TextSpan>
			{TypedTextFollowUp}
		</Shaky>
	);
});

export const refObject = {
	giveErrorFeedback: () => {},
	setPreviewText: (c: string) => {},
	setText: (c: string) => {}
};
