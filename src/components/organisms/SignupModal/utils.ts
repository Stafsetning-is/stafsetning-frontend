export const getLoginUrl = () => {
	return document.location.pathname.replace("sign-up", "log-in");
};

export const clearLoginUrl = () => {
	return document.location.pathname.replace("sign-up", "");
};
