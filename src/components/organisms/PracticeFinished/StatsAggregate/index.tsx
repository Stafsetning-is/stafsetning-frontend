import React from "react";
import { Outer, ErrorCount, TimeText } from "./styles";

export default () => {
	return (
		<Outer>
			<ErrorCount>Þú gerðir 4 Villur</ErrorCount>
			<TimeText>Tíminn þinn var 1:29</TimeText>
		</Outer>
	);
};
