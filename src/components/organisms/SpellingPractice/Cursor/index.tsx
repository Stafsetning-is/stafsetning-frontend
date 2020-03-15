import React, { useState, useMemo } from "react";
import { Cursor } from "./styles";

type opacity = 1 | 0;

/**
 * Blinking cursor that is to be displayed
 * at users current position in the
 * typing text
 */
export default () => {
	const [opacity, setOpacity] = useState<opacity>(1);

	/**
	 * on mount it starts an interval
	 * which is cleared on unmount
	 */
	useMemo(() => {
		setTimeout(() => {
			if (opacity === 1) setOpacity(0);
			else setOpacity(1);
		}, 1000);
	}, [opacity]);

	return <Cursor theme={{ opacity }}></Cursor>;
};
