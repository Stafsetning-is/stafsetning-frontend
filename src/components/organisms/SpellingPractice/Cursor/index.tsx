import React, { useState, useEffect } from "react";
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
	useEffect(() => {
		const interval = setInterval(() => {
			if (opacity === 1) setOpacity(0);
			else setOpacity(1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <Cursor theme={{ opacity }}></Cursor>;
};
