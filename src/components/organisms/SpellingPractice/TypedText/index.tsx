import React, {
	forwardRef,
	useImperativeHandle,
	useState,
	useEffect
} from "react";
import { Shaky } from "../../../";

const PREVIEW_DURATION = 2500;
const SHAKE_DURATION = 500;

export default forwardRef((props, ref) => {
	const [text, setText] = useState("");
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
	 * Adds character to visibled text
	 * @param char
	 */
	const addCharacter = (char: string) => {
		setText((t) => t + char);
	};

	/**
	 * Previews a preview text temporarily
	 */
	const previewTemporarily = (preview: string) => {
		const tmp = text;
		setText((t) => `${t} ${preview}`);
		setTimeout(() => setText(tmp), PREVIEW_DURATION);
	};

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
		addCharacter,
		previewTemporarily,
		giveErrorFeedback
	}));

	return (
		<Shaky shake={showErrorFeedback}>
			<span>{text}</span>
		</Shaky>
	);
});

export const refObject = {
	addCharacter: (c: string) => {},
	previewTemporarily: (p: string) => {},
	giveErrorFeedback: () => {}
};
