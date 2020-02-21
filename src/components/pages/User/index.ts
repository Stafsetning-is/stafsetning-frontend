import Profile from "./Profile";
import Settings from "./Settings";

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
	}
];
