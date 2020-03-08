export const urlWithoutPath = () => {
	let url = document.location.pathname;
	if (url.charAt(url.length - 1) !== "/") url += "/";
	return url;
};
