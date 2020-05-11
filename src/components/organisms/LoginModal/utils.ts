/**
 * Replaces the url to sign up
 */
export const getSignupUrl = () => {
    return document.location.pathname.replace("log-in", "sign-up");
};
/**
 * Raplaces the url to the default home page
 */
export const clearLoginUrl = () => {
    return document.location.pathname.replace(/log-in\/?/g, "");
};
