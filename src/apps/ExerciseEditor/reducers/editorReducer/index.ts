import { EditorState } from "./interface";
import { ActionTypes, Actions } from "../../actions/types";

export const initialState: EditorState = {
	openFiles: [],
	openTab: null,
	open: true,
	minimized: false,
	expanded: false,
	errorMessage: "",
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
						local: true,
						counter: 0,
					},
				],
				openTab: id,
			};
		case ActionTypes.writeToOpenFile:
			const doc = state.openFiles.find((file) => file._id === state.openTab);
			if (!doc) return state;
			doc.text = action.payload;
			doc.modified = true;
			return {
				...state,
				openFiles: [...state.openFiles],
			};
		case ActionTypes.closeEditor:
			return {
				...state,
				open: false,
			};
		case ActionTypes.openEditor:
			return {
				...state,
				open: true,
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
		case ActionTypes.renameFileInEditor:
			const toRename = state.openFiles.find(
				(file) => file._id === state.openTab
			);
			if (!toRename) return state;
			toRename.fileName = action.payload;
			toRename.modified = true;
			console.log("toRename", toRename);
			return {
				...state,
				openFiles: [...state.openFiles],
			};
		case ActionTypes.openExerciseFile:
			const found = state.openFiles.find(
				({ _id }) => _id === action.payload._id
			);
			if (found) return { ...state, open: true, openTab: action.payload._id };
			return {
				...state,
				openFiles: [...state.openFiles, action.payload],
				open: true,
				minimized: false,
				openTab: action.payload._id,
			};
		case ActionTypes.clearErrorMessage:
			return {
				...state,
				errorMessage: "",
			};
		case ActionTypes.setErrorMessage:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export * from "./interface";
