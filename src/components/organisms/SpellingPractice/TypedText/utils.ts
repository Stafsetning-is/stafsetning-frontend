import { LocalStorageService } from "../../../../services";
import { FontSelection, FontSize } from "./interface";

export const SHAKE_DURATION = 500;
export const FONT_CACHE_KEY = "def-s";
export const SIZE_CACHE_KEY = "def-size";
export const FONTS = ["Roboto Mono", "Fira Code"];
export const FONT_SIZES: FontSize[] = [
	"16px",
	"18px",
	"20px",
	"22px",
	"24px",
	"26px"
];
const DEFAULT_FONT = "Roboto Mono";
const DEFAULT_SIZE = "16px";

/**
 * Maps 0 based index of fonts to button
 * texts
 * @param index 0 based index
 */
export const getFontButtonText = (index: number) => `Leturgerð ${index + 1}`;

/**
 * Caches font name
 * @param fontName font name chosen
 */
export const cacheFont = (fontName: string) => {
	LocalStorageService.put(FONT_CACHE_KEY, fontName);
};

/**
 * Gets the font on load.
 * Handles checking the local storage
 * if the key is already set in the localstorage
 */
export const getFontOnLoad = () => {
	const prefferedFont = LocalStorageService.get(FONT_CACHE_KEY);
	return prefferedFont ?? DEFAULT_FONT;
};

/**
 * handles the cachinig of font size value
 * @param size size to put in cache
 */
export const cacheFontSize = (size: FontSize) => {
	LocalStorageService.put(SIZE_CACHE_KEY, size);
};

/**
 * Retrieves he default value for the font size
 * either the cached value or system default value
 */
export const getFontSizeOnLoad = (): FontSize => {
	const preferredSize = LocalStorageService.get<FontSize>(SIZE_CACHE_KEY);
	return preferredSize ?? DEFAULT_SIZE;
};

/**
 * returns a font selection object based on the current font
 * @param currentFont current font
 */
export const getFontSizeSelection = (currentFont: FontSize): FontSelection => {
	const index = FONT_SIZES.indexOf(currentFont);
	return {
		smaller: getFontSizeByIndex(index - 1),
		larger: getFontSizeByIndex(index + 1),
		current: currentFont
	};
};

export const getFontSizeByIndex = (index: number) => {
	const size = FONT_SIZES[index];
	return size ? size : null;
};
