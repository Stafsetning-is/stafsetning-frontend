const userAge = 13;

export const RenderByAge = (Component: any, minimumAge: number) => {
	if (userAge < minimumAge) return () => null;
	return Component;
};
