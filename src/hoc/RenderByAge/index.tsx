import { FC } from "react";

const userAge = 13;

export const RenderByAge = (Component: FC, minimumAge: number) => {
	if (userAge < minimumAge) return () => null;
	return Component;
};
