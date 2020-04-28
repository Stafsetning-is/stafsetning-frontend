import React from "react";
import { Footer, Item } from "./styles";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";

const Component = ({ text, modified }: IProps) => {
	const noText = text.length === 0;
	const charCount = text.length;
	const wordCount = noText ? 0 : text.split(" ").length;
	const saveText = (() => {
		if (noText) return "";
		else if (modified) return "Óvistaðar breytingar";
		else return "Vistað";
	})();
	return (
		<Footer>
			<Item>Orð: {wordCount}</Item>
			<Item>Stafir: {charCount}</Item>
			<Item>{saveText}</Item>
		</Footer>
	);
};

const mapStateToProps = (state: StoreState) => {
	const file = state.editor.openFiles.find(
		(file) => file._id === state.editor.openTab
	);
	return {
		text: file ? file.text : "",
		modified: file ? file.modified : false,
	};
};
export default connect(mapStateToProps)(Component);
