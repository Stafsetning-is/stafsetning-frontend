import { CloseAuthModalAction, OpenAuthModalAction } from "../authActions";
export enum ActionTypes {
	openAuthModal,
	closeAuthModal
}

export type Actions = CloseAuthModalAction | OpenAuthModalAction;
