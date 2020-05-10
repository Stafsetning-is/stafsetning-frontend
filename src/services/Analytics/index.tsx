import ReactGA from "react-ga";
/**
 * Initialzes the Google Analytics module and exports it
 */

// if we're testing then we do not initialize it
if (process.env.NODE_ENV !== "test") ReactGA.initialize("UA-165448557-1");

export const GoogleAnalytics = ReactGA;
