export const getSignupUrl = () => {
	return document.location.pathname.replace("log-in", "sign-up");
};

export const clearLoginUrl = () => {
	return document.location.pathname.replace(/log-in\/?/g, "");
};
