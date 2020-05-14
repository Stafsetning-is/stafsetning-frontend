import React from "react";
import { Outer } from "./styles";

/**
 * An info box that tells the user how to publish a file
 */
export default () => {
	return (
		<Outer>
			Til þess að birta æfinguna þarftu að skipta textanum niður í
			einingar. Smelltu á milli orða til að búa til skilju. Æfingin
			birtist síðan nemendum sem ein eining í einu. Þegar þú hefur skipt
			æfingunni niður og valið námsstig þá er hægt að birta hana fyrir
			nemendum.
		</Outer>
	);
};
