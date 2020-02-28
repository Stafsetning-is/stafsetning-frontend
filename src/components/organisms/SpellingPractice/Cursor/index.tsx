import React, { useState } from "react";
import { Cursor } from "./styles";

type opacity = 1 | 0;

export default () => {
	const [opacity, setOpacity] = useState<opacity>(1);

	setInterval(() => {
		if (opacity === 1) setOpacity(0);
		else setOpacity(1);
	}, 1000);

	return <Cursor theme={{ opacity }}></Cursor>;
};
