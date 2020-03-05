import LoginPage from "./Login";
import SignupPage from "./Signup";

export default [
	{
		route: "*/log-in",
		component: LoginPage
	},

	{
		route: "*/sign-up",
		component: SignupPage
	}
];
