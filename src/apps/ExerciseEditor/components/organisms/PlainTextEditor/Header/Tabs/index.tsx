import React from "react";
import { TabsProps as IProps } from "../../interface";
import Tab from "./Tab";
import NewTab from "./NewTab";
import { connect } from "react-redux";
import { StoreState } from "../../../../../reducers";
import { setOpenTab, createNewFile, setCloseTab } from "../../../../../actions";

const Component = ({
	documents,
	openTab,
	setOpenTab,
	createNewFile,
	setCloseTab,
}: IProps) => {
	return (
		<React.Fragment>
			{documents.map(({ fileName, _id }, i) => (
				<Tab
					name={fileName}
					selected={_id === openTab}
					onClick={() => setOpenTab(_id)}
					onClose={() => setCloseTab(_id)}
				/>
			))}
			<NewTab onClick={createNewFile} />
		</React.Fragment>
	);
};

const mapStateToProps = (state: StoreState) => ({
	openTab: state.editor.openTab,
	documents: state.editor.openFiles,
});

export default connect(mapStateToProps, {
	setOpenTab,
	createNewFile,
	setCloseTab,
})(Component);
