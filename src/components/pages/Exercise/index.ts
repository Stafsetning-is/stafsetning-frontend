import Create from "./Create";
import PracticeSession from "./PracticeSession";

export default [
	{
		route: "/exercise/new/text-editor",
		component: Create,
	},
	{
		route: "/exercise/practice/:id/",
		component: PracticeSession,
	},
];
