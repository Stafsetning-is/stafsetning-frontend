import React from "react";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";
import { UIButton } from "../../../";

const Component = ({ shouldHide, onClick }: IProps) => {
	if (shouldHide) return null;
	return <UIButton onClick={onClick} label="Ljúka við æfingu" />;
};

const mapStateToProps = (store: StoreState) => {
	const found = store.editor.openFiles.find(
		(doc) => store.editor.openTab === doc._id
	);

	return { shouldHide: found ? !found.modified : true };
};

export default connect(mapStateToProps)(Component);
