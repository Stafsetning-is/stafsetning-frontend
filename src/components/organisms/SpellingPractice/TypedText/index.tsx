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
	cacheFont,
	getFontSizeOnLoad,
	getFontSizeSelection as getAdjacentFonts,
	cacheFontSize
} from "./utils";
import { FontSize } from "./interface";
import { Shaky } from "../../../";
import { TextSpan, PreviewSpan, Block } from "./styles";
import Cursor from "../Cursor";
import FontButton from "../FontButton";
import FontSizeButton from "../FontSizeToggles";

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
	const [fontSize, setFontSize] = useState(getFontSizeOnLoad());

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
	 * Gets the selection of fonts relative to currentfont
	 */
	const getFontSizeSelection = () => getAdjacentFonts(fontSize);

	/**
	 * Opens these handlers to the
	 * outside
	 */
	useImperativeHandle(ref, () => ({
		giveErrorFeedback,
		setText,
		setPreviewText
	}));

	const theme = { fontFamily: font, fontSize: fontSize };

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

	const handleFontSizeChange = (size: FontSize | null) => {
		if (size === null) return;
		cacheFontSize(size);
		setFontSize(size);
	};

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
	}, [previewText, font, fontSize]);

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
					key={fontName}
				/>
			)),
		[font]
	);

	/**
	 * Returns the font size buttons
	 * whenever the font size state changes
	 */
	const fontSizeButtons = useMemo(() => {
		const { smaller, larger } = getFontSizeSelection();
		return (
			<React.Fragment>
				<FontSizeButton
					type="dec"
					value={smaller}
					onClick={() => handleFontSizeChange(smaller)}
				/>
				<FontSizeButton
					type="inc"
					value={larger}
					onClick={() => handleFontSizeChange(larger)}
				/>
			</React.Fragment>
		);
	}, [fontSize]);

	return (
		<React.Fragment>
			<Block>
				{fontButtons}
				{fontSizeButtons}
			</Block>
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
