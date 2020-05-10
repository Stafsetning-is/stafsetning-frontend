import { useRef, useEffect } from "react";

/**
 * hook that knows a values previous value
 * @param value the value to be cached
 */
export const usePrevious = <T>(value: T) => {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};
