import React, { useState, useMemo, useEffect } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { EditorFrame, EditorOuter } from "./styles";
import { textToNodeArray, handleKeyDown } from "./utils";
import { TextEditorProps as IProps, BaseDocument, DocMap } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { writeToOpenFile } from "../../../actions";
import Header from "./Header";

const Component = <Doc extends BaseDocument>({
	documents,
	selected,
	writeToOpenFile,
}: IProps<Doc>) => {
	const openFile = documents.find((file) => file._id === selected);
	console.log("openFile", openFile);
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	const handleChange = (nodes: Node[]) => {
		if (!(openFile && selected)) return;
		const text = [...[...nodes].shift()?.children].shift().text;
		writeToOpenFile(text);
	};
	// ATH refactora og buta niidur i buta.. hafa TD bara heeader, textframe, footer
	// buta thetta MIKID BETUR NIDUR
	return (
		<EditorOuter>
			<Header />
			<EditorFrame>
				{selected ? (
					<Slate
						editor={editor}
						value={textToNodeArray(openFile ? openFile.text : "no open fle")}
						onChange={handleChange}
					>
						<Editable
							placeholder="Hér getur þú búið til æfingu"
							onKeyDown={handleKeyDown}
						/>
					</Slate>
				) : (
					"no selected"
				)}
			</EditorFrame>
		</EditorOuter>
	);
};

const mapStateToProps = (state: StoreState) => ({
	documents: state.editor.openFiles,
	selected: state.editor.openTab,
});

export const PlainTextEditor = connect(mapStateToProps, { writeToOpenFile })(
	Component
);
