import React from "react";
import { FrontPageView } from "../../../";
import { TutorialWrapper } from "./../../../../hoc";
import {
	FIRST_WELCOME,
	TRY_FIRST_EXERCISE,
	TutorialLocations,
} from "../../../../services";

export default () => {
	return (
		<TutorialWrapper
			items={[FIRST_WELCOME, TRY_FIRST_EXERCISE]}
			location={TutorialLocations.frontPage}
		>
			<FrontPageView />
		</TutorialWrapper>
	);
};
