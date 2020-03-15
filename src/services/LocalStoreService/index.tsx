/**
 * Class handles the storing and retrieval
 * of data from localstorage
 */

const userId = "2af322rawe2r3a45uidx";

export class LocalStorageService {
	/**
	 * Takes a key value pair
	 * and stores in local storage
	 * @param key string key for lookup later
	 * @param value any javascript value (does not need to be string)
	 */
	public static put<T>(key: string, value: T) {
		const stringVal = JSON.stringify(value);
		localStorage.setItem(LocalStorageService.getKey(key), stringVal);
	}

	/**
	 * Gets the value in local storage and parses the stringified
	 * value if key is not found, then returns nulls
	 * @param key lookup key
	 */
	public static get<T>(key: string): T | null {
		const stringVal = localStorage.getItem(LocalStorageService.getKey(key));
		if (stringVal === null) return stringVal;
		return JSON.parse(stringVal);
	}

	private static getKey(key: string) {
		return `${userId}-${key}`;
	}
}
