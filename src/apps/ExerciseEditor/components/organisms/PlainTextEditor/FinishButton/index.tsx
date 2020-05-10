import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { UIButton } from "../../../";

/**
 * Wrapped UIButton to place it correctly
 * in the editor
 */
const Component = ({ shouldHide, onClick }: IProps) => {
	if (shouldHide) return null;
	return (
		<Outer>
			<UIButton onClick={onClick} label="Ljúka við æfingu" />
		</Outer>
	);
};

const mapStateToProps = (store: StoreState) => {
	const found = store.editor.openFiles.find(
		(doc) => store.editor.openTab === doc._id
	);

	return { shouldHide: found ? !found.modified : true };
};

export default connect(mapStateToProps)(Component);
