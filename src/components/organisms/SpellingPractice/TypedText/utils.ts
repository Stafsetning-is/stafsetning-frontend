import { LocalStorageService } from "../../../../services";

export const SHAKE_DURATION = 500;
export const FONT_CACHE_KEY = "def-font";
export const FONTS = ["Roboto Mono", "Fira Code"];
const DEFAULT_FONT = "Roboto Mono";

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
