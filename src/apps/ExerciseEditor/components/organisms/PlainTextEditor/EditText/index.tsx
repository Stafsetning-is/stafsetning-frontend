import React, { useMemo } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { EditorFrame } from "./styles";
import {
	getTextFromNodes,
	handleKeyDown,
	getTextFromFile,
	NO_FILES_OPEN_TEXT,
	NO_TAB_OPEN_TEXT,
	EDITOR_PLACEHOLDER,
} from "./utils";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { writeToOpenFile } from "../../../../actions";
import { EditorProps as IProps } from "../interface";

const EditText = ({ writeToOpenFile, openFile, noFiles }: IProps) => {
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	const handleChange = (nodes: Node[]) => {
		if (!openFile) return;
		const text = getTextFromNodes(nodes);
		writeToOpenFile(text);
	};

	const getPlaceholderText = () => {
		if (noFiles) return NO_FILES_OPEN_TEXT;
		return NO_TAB_OPEN_TEXT;
	};

	return (
		<EditorFrame>
			{openFile ? (
				<Slate
					editor={editor}
					value={getTextFromFile(openFile)}
					onChange={handleChange}
				>
					<Editable
						placeholder={EDITOR_PLACEHOLDER}
						onKeyDown={handleKeyDown}
					/>
				</Slate>
			) : (
				getPlaceholderText()
			)}
		</EditorFrame>
	);
};

const mapStateToProps = (state: StoreState) => ({
	openFile: state.editor.openFiles.find(
		(file) => file._id === state.editor.openTab
	),
	noFiles: state.editor.openFiles.length === 0,
});

export default connect(mapStateToProps, { writeToOpenFile })(EditText);
