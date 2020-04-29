import Profile from "./Profile";
import Settings from "./Settings";
import CreateAdminAccount from "./CreateAdminAccount";
import PendingAdminInvites from "./PendingAdminInvites";

export default [
	{
		route: "/user/profile",
		component: Profile,
	},
	{
		route: "/user/settings",
		component: Settings,
	},
	{
		route: "/user/create-admin-account/",
		component: CreateAdminAccount,
	},
	{
		route: "/user/pending-admin-invites/",
		component: PendingAdminInvites,
	},
];
