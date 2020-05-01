import React, { useEffect, useState } from "react";

import { IProps } from "./interface";

import { LoadingGrid } from "../..";
import { Trophy } from "../../molecules";

/**
 * Renders a list of exercises
 */
export const TrophyBoxesContainer = ({ trophies }: IProps) => {
	return (
		<LoadingGrid itemsInRow={5}>
			{trophies.map((item) => (
				<Trophy {...item} />
			))}
		</LoadingGrid>
	);
};
