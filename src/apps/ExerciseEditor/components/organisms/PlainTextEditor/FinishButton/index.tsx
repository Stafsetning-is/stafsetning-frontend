import React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../../reducers";

const Component = ({ shouldHide, onClick }: IProps) => {
	if (shouldHide) return null;
	return <Button onClick={onClick}>Ljúka við æfingu</Button>;
};

const mapStateToProps = (store: StoreState) => {
	const found = store.editor.openFiles.find(
		(doc) => store.editor.openTab === doc._id
	);

	return { shouldHide: found ? !found.modified : true };
};

export default connect(mapStateToProps)(Component);
