import LandingPage from "./LandingPage";
import AboutUsPage from "./AboutUsPage";
import CookieInfoPage from "./CookieInfoPage";

export default [
    {
        route: "/",
        component: LandingPage
    },
    {
        route: "/about-us",
        component: AboutUsPage
    },
    {
        route: "/cookies",
        component: CookieInfoPage
    }
];
