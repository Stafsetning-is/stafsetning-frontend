import React, {
	forwardRef,
	useImperativeHandle,
	useState,
	useEffect,
	useMemo
} from "react";
import {
	SHAKE_DURATION,
	getFontOnLoad,
	FONTS,
	getFontButtonText,
	cacheFont
} from "./utils";
import { Shaky } from "../../../";
import { TextSpan, PreviewSpan, Block } from "./styles";
import Cursor from "../Cursor";
import FontButton from "../FontButton";

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
	const [font, setFont] = useState(getFontOnLoad());

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
		setText,
		setPreviewText
	}));

	const theme = { fontFamily: font };

	/**
	 * Memos previewstring
	 * or cursor
	 *
	 * only changes memo when previewText or font updates
	 */
	const TypedTextFollowUp = useMemo(() => {
		if (previewText && ![" ", ""].includes(previewText))
			return <PreviewSpan theme={theme}>{previewText}</PreviewSpan>;
		else return <Cursor />;
	}, [previewText, font]);

	/**
	 * Handles changing the font by
	 * caching the previoiusly chosen value
	 * and also changing in state
	 * @param font chosen font
	 */
	const handleFontChange = (font: string) => {
		cacheFont(font);
		setFont(font);
	};

	/**
	 * Maps fonts to fonot buttons
	 * uses memo to only rerender when fon changes
	 */
	const fontButtons = useMemo(
		() =>
			FONTS.map((fontName, index) => (
				<FontButton
					fontName={getFontButtonText(index)}
					onClick={() => handleFontChange(fontName)}
					selected={font === fontName}
				/>
			)),
		[font]
	);

	return (
		<React.Fragment>
			<Block>{fontButtons}</Block>
			<Shaky shake={showErrorFeedback}>
				<TextSpan theme={theme}>{text}</TextSpan>
				{TypedTextFollowUp}
			</Shaky>
		</React.Fragment>
	);
});

export const refObject = {
	giveErrorFeedback: () => {},
	setPreviewText: (c: string) => {},
	setText: (c: string) => {}
};
