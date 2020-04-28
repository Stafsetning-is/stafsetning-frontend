const TOKEN_KEY = "xt6q5Vluvxd0gTCX/gIyCw";
const HOURS_TO_EXPIRE = 6;

export type AuthLevels = "user" | "guest" | "admin" | "unknown";

/**
 * set Auth Bearer as cookie
 * @param token Token value received from backend
 */
export const setAuthCookie = (token: string) => {
	const date = new Date();
	date.setTime(date.getTime() + HOURS_TO_EXPIRE * 3600000);
	document.cookie = `${TOKEN_KEY}=${token};expires=${date.toUTCString()};path=/`;
};

export const getAuthToken = () => {
	const name = TOKEN_KEY + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
};

/**
 * Removes jwt cookie from browser
 */
export const removeToken = () => setAuthCookie("");
