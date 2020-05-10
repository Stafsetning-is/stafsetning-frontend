import { lazy } from "react";

export default [
	{
		route: "exercise-editor",
		component: lazy(() => import("./ExerciseEditor")),
	},
];
