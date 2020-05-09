import { TutorialItem, TutorialLocations } from "../interface";

export const EXERCISE_FIRST_STEP: TutorialItem = {
	text:
		"Velkominn í fyrstu æfinguna þína. Ef það vakna einhverjar spurningar þá verð ég niðri í horninu með leiðbeiningar!",
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
	text:
		"Þegar þú sérð gráa textann þá áttu að skrifa hann inn! Passaðu þig að skrifa hann eins, annars færðu villu 😃",
	type: "exercise-explain-step-2",
	auth: "user",
	actions: [],
	location: TutorialLocations.exercisePage,
	doOnLoad: [],
};

export const EXERCISE_THIRD_STEP: TutorialItem = {
	text:
		"Mundu að þú getur ýtt á „BIRTA“ takkann ef þú manst ekki hvað þú átt að skrifa!",
	type: "exercise-explain-step-3",
	auth: "user",
	actions: [],
	location: TutorialLocations.exercisePage,
	doOnLoad: [],
};

export const EXERCISE_FOURTH_STEP: TutorialItem = {
	text: "Vá, þú ert að standa þig vel. Þú átt skilið bikað!",
	type: "exercise-explain-step-4",
	auth: "user",
	actions: [],
	location: TutorialLocations.exercisePage,
	doOnLoad: [],
};
