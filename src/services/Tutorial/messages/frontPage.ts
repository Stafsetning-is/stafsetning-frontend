import { TutorialItem, TutorialLocations } from "../interface";

export const TRY_FIRST_EXERCISE: TutorialItem = {
	text: "Ýttu á einhverja æfingu hérna á forsíðunni til að halda áfram.",
	type: "try-first-exercise",
	auth: "user",
	actions: [],
	location: TutorialLocations.frontPage,
	doOnLoad: [],
};

export const FIRST_WELCOME: TutorialItem = {
	text: "Hæ ég heiti Sámur. Ég ætla að sýna þér Stafsetning.is",
	type: "click-exercise-box-on-front-page",
	auth: "user",
	actions: [
		{
			text: "Okei!",
			do: ["shrink", "continue"],
			type: "info",
		},
	],
	location: TutorialLocations.frontPage,
	doOnLoad: ["grow"],
};
