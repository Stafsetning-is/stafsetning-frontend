export class URlService {
	/**
	 * Accepts regex and returns
	 * a the matching letters in the url
	 * else it throws an error
	 * @param regex Regex to match from url
	 */
	public static matchFromUrl(regex: RegExp): string {
		try {
			const string = document.URL.match(regex)?.shift();
			if (string === undefined) throw Error();
			return string;
		} catch (e) {
			throw Error("match not found in url");
		}
	}
}
