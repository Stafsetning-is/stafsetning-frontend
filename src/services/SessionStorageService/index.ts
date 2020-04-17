/**
 * Class handles the storing and retrieval
 * of data from session storages
 */
export class SessionStorageService {
	/**
	 * Takes a key value pair
	 * and stores in session storage
	 * @param key string key for lookup later
	 * @param value any javascript value (does not need to be string)
	 */
	public static put<T>(key: string, value: T) {
		const stringVal = JSON.stringify(value);
		sessionStorage.setItem(key, stringVal);
	}

	/**
	 * Gets the value in session storage and parses the stringified
	 * value if key is not found, then returns nulls
	 * @param key lookup key
	 */
	public static get<T>(key: string): T | null {
		const stringVal = sessionStorage.getItem(key);
		if (stringVal === null) return stringVal;
		return JSON.parse(stringVal);
	}
}
