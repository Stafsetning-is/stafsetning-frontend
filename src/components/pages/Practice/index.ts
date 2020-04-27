import PracticeSession from "./PracticeSession";
import CompletedView from "./CompletedView";

export default [
	{
		route: "/exercise/:id/",
		component: PracticeSession,
	},
	{
		route: "/completed/:id",
		component: CompletedView,
	},
];
