import LandingPage from "./LandingPage";
import AboutUs from "./AboutUsPage";
import CookieInfoPage from "./CookieInfoPage";

export default [
    {
        route: "/",
        component: LandingPage
    },
    {
        route: "/about-us",
        component: AboutUs
    },
    {
        route: "/cookies",
        component: CookieInfoPage
    }
];
