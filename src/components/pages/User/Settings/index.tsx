import React from "react";
import { LiveForm } from "../../../";
import { formRecipe } from "./formRecipe";

export default () => (
	<div>
		<LiveForm fields={formRecipe} postTo="" onSuccess={() => {}} />
	</div>
);
