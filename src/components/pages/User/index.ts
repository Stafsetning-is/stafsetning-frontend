import Profile from "./Profile";
import Settings from "./Settings";
import LoginPage from "./Signup";

export default [
	{
		route: "/user/:id/profile",
		component: Profile,
		exact: false
	},
	{
		route: "/user/settings",
		component: Settings,
		exact: true
	},
	{
		route: "*/log-in",
		component: LoginPage
	}
];
