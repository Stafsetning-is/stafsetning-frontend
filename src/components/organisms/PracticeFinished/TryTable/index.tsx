import React from "react";
import { Outer, Title, Score } from "./styles";

/**
 * Table that maps out
 * the high scores of that
 * user for this exercise
 */
export default () => {
	return (
		<Outer>
			<Title>Stigataflan þín í æfingu #38</Title>
			{TEMP_SCORES.map((score, i) => (
				<Score>
					#{i + 1}: {score} stig - 29. mars 2019
				</Score>
			))}
		</Outer>
	);
};

const TEMP_SCORES = [1, 2, 4, 8];
