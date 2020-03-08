import PracticeSession from "./PracticeSession";
import CompletedView from "./CompletedView";

export default [
	{
		route: "/practice/:id/",
		component: PracticeSession
	},
	{
		route: "/completed/:id/",
		component: CompletedView
	}
];
