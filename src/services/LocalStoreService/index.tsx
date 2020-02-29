/**
 * Class handles the storing and retrieval
 * of data from localstorage
 */
export class LocalStorageService {
	/**
	 * Takes a key value pair
	 * and stores in local storage
	 * @param key string key for lookup later
	 * @param value any javascript value (does not need to be string)
	 */
	public static put<T>(key: string, value: T) {
		const stringVal = JSON.stringify(value);
		localStorage.setItem(key, stringVal);
	}

	/**
	 * Gets the value in local storage and parses the stringified
	 * value if key is not found, then returns nulls
	 * @param key lookup key
	 */
	public static get<T>(key: string): T | null {
		const stringVal = localStorage.getItem(key);
		if (stringVal === null) return stringVal;
		return JSON.parse(stringVal);
	}
}
