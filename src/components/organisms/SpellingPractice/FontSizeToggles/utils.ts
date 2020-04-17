import { ToogleType } from "./interface";

export const toogleTypeToIcon = (type: ToogleType) => {
	if (type === "inc") return "Stækka letur";
	return "Minnka letur";
};
