/**
 * Replaces the URL to the log in
 */
export const getLoginUrl = () => {
    return document.location.pathname.replace("sign-up", "log-in");
};

/**
 * Replaces the URL to the home page
 */
export const clearLoginUrl = () => {
    return document.location.pathname.replace("sign-up", "");
};
