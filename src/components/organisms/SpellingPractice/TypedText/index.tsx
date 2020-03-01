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
	cacheFontSize,
	cacheBackgroundSetting,
	getBackgroundSettingOnLoad
} from "./utils";
import {
	TextSpan,
	PreviewSpan,
	Block,
	TypedTextContainer,
	ToggleSeperator
} from "./styles";
import { FontSize } from "./interface";
import { Shaky } from "../../../";
import { IProps } from "./interface";
import Cursor from "../Cursor";
import ToggleButton from "../ToggleButton";
import FontSizeButton from "../FontSizeToggles";

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
export default forwardRef(({ typed, preview }: IProps, ref) => {
	/**
	 * Stateful variables for the
	 * TypedText component
	 */
	const [showErrorFeedback, setShowErrorFeedback] = useState(false);
	const [font, setFont] = useState(getFontOnLoad());
	const [fontSize, setFontSize] = useState(getFontSizeOnLoad());
	const [dislexic, setDislexic] = useState(getBackgroundSettingOnLoad());

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
		giveErrorFeedback
	}));

	const theme = useMemo(() => ({ fontFamily: font, fontSize: fontSize }), [
		font,
		fontSize
	]);

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
	 * handles the change of font size
	 * and caching new default value
	 * @param size new font size value
	 */
	const handleFontSizeChange = (size: FontSize | null) => {
		if (size === null) return;
		cacheFontSize(size);
		setFontSize(size);
	};

	/**
	 * Handles caching new value
	 * and changing dislexic state
	 */
	const handleDislexicChange = () => {
		const newVal = !dislexic;
		cacheBackgroundSetting(newVal);
		setDislexic(newVal);
	};

	/**
	 * Memos previewstring
	 * or cursor
	 *
	 * only changes memo when previewText or font updates
	 */
	const TypedTextFollowUp = useMemo(() => {
		if (preview && ![" ", ""].includes(preview))
			return <PreviewSpan theme={theme}>{preview}</PreviewSpan>;
		else return <Cursor />;
	}, [preview, theme]);

	/**
	 * Maps fonts to fonot buttons
	 * uses memo to only rerender when fon changes
	 */
	const fontButtons = useMemo(
		() =>
			FONTS.map((fontName, index) => (
				<ToggleButton
					buttonText={getFontButtonText(index)}
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fontSize]);

	/**
	 * Memos the dyslexic toggle button
	 */
	const disilexicButton = useMemo(
		() => (
			<ToggleButton
				buttonText="Breyta bakgrunnslit"
				onClick={handleDislexicChange}
				selected={dislexic}
			/>
		),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[dislexic]
	);

	return (
		<React.Fragment>
			<Block>
				{fontButtons}
				<ToggleSeperator />
				{fontSizeButtons}
				<ToggleSeperator />
				{disilexicButton}
			</Block>
			<TypedTextContainer theme={{ dislexic }}>
				<Shaky shake={showErrorFeedback}>
					<TextSpan theme={theme}>{typed}</TextSpan>
					{TypedTextFollowUp}
				</Shaky>
			</TypedTextContainer>
		</React.Fragment>
	);
});

export const refObject = {
	giveErrorFeedback: () => {}
};
