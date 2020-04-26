import { EditorState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: EditorState = {
	openFiles: [
		{ fileName: "Ng og nk #1", text: "þetta er texti í þessum file", _id: "1" },
		{ fileName: "Ng og nk #3", text: "Annar texti", _id: "2" },
		{ fileName: "Kalli fór hvert?", text: "Ekki hugmynd", _id: "3" },
	],
	openTab: null,
};

export default (
	state: EditorState = initialState,
	action: Actions
): EditorState => {
	switch (action.type) {
		case ActionTypes.setCloseTab:
			return {
				...state,
				openFiles: state.openFiles.filter((doc) => doc._id !== action.payload),
				openTab: null,
			};
		case ActionTypes.setOpenTab:
			return {
				...state,
				openTab: action.payload,
			};
		case ActionTypes.createNewFile:
			const id = `${Math.round(Math.random() * 1000000000)}`;
			return {
				...state,
				openFiles: [
					...state.openFiles,
					{
						fileName: "",
						text: "",
						_id: id,
					},
				],
				openTab: id,
			};
		case ActionTypes.writeToOpenFile:
			const doc = state.openFiles.find((file) => file._id === state.openTab);
			if (!doc) return state;
			doc.text = action.payload;
			return {
				...state,
				openFiles: [...state.openFiles],
			};
		case ActionTypes.closeEditor:
			return {
				...state,
				open: false,
			};
		case ActionTypes.minimizeEditor:
			return {
				...state,
				minimized: true,
				expanded: false,
			};
		case ActionTypes.maximizeEditor:
			return {
				...state,
				minimized: false,
			};
		case ActionTypes.collapseEditor:
			return {
				...state,
				expanded: false,
			};
		case ActionTypes.expandEditor:
			return {
				...state,
				expanded: true,
				minimized: false,
			};
		default:
			return state;
	}
};

export * from "./interface";
