import { TutorialItem, TutorialLocations } from "../interface";

export const EXERCISE_FIRST_STEP: TutorialItem = {
	text:
		"Velkomin/nn í fyrstu æfinguna þína! Ég verð hér niðri í horninu með fleiri leiðbeiningar fyrir þig!",
	type: "exercise-explain-step-1",
	auth: "user",
	actions: [
		{
			text: "Frábært!",
			do: ["shrink", "continue"],
			type: "info",
		},
	],
	location: TutorialLocations.exercisePage,
	doOnLoad: ["grow"],
};

export const EXERCISE_SECOND_STEP: TutorialItem = {
	text: "Skrifaðu eftir gráa textanum. Passaðu þig að gera ekki villu!",
	type: "exercise-explain-step-2",
	auth: "user",
	actions: [
		{
			text: "Takk",
			do: ["continue"],
			type: "info",
		},
	],
	location: TutorialLocations.exercisePage,
	doOnLoad: [],
};

export const EXERCISE_THIRD_STEP: TutorialItem = {
	text: "Þú getur smellt á „Birta“ takkann til að sjá textann aftur!",
	type: "exercise-explain-step-3",
	auth: "user",
	actions: [
		{
			text: "Já, sniðugt",
			do: ["continue"],
			type: "info",
		},
	],
	location: TutorialLocations.exercisePage,
	doOnLoad: [],
};

export const EXERCISE_FOURTH_STEP: TutorialItem = {
	text: "Vá, þú ert að standa þig svo vel! Þú átt skilið verðlaun!",
	type: "exercise-explain-step-4",
	auth: "user",
	actions: [
		{
			text: "Ég er frábær!",
			do: ["continue"],
			type: "info",
		},
	],
	location: TutorialLocations.exercisePage,
	doOnLoad: [],
};
