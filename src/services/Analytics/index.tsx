import ReactGA from "react-ga";

if (process.env.NODE_ENV !== "test") ReactGA.initialize("UA-165448557-1");

export const GoogleAnalytics = ReactGA;
