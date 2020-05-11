import React from "react";
import { TabsProps as IProps } from "../../interface";
import Tab from "./Tab";
import NewTab from "./NewTab";
import { connect } from "react-redux";
import { StoreState } from "../../../../../reducers";
import {
	setOpenTab,
	createNewFile,
	setCloseTab,
	closeEditor,
	maximizeEditor,
	minimizeEditor,
	collapseEditor,
	expandEditor,
	renameFile,
} from "../../../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faExpandAlt,
	faCompressAlt,
	faWindowClose,
	faWindowMinimize,
	faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { Close, Collapse, Maximize } from "./styles";

/**
 * renders the tabs for the text editor
 */
const Component = ({
	documents,
	openTab,
	setOpenTab,
	createNewFile,
	setCloseTab,
	closeEditor,
	minimized,
	expanded,
	maximizeEditor,
	minimizeEditor,
	collapseEditor,
	expandEditor,
	renameFile,
}: IProps) => {
	const noTabsOpen = documents.length === 0;
	return (
		<React.Fragment>
			<Close onClick={closeEditor}>
				<FontAwesomeIcon icon={faWindowClose} />
			</Close>
			<Maximize onClick={minimized ? maximizeEditor : minimizeEditor}>
				<FontAwesomeIcon
					icon={minimized ? faWindowMaximize : faWindowMinimize}
				/>
			</Maximize>
			<Collapse onClick={expanded ? collapseEditor : expandEditor}>
				<FontAwesomeIcon
					icon={expanded ? faCompressAlt : faExpandAlt}
				/>
			</Collapse>
			{!noTabsOpen
				? documents.map(({ fileName, _id, modified }, i) => (
						<Tab
							key={_id}
							name={fileName}
							selected={_id === openTab}
							onClick={() => setOpenTab(_id)}
							onClose={() => setCloseTab(_id)}
							modified={modified}
							onRename={renameFile}
						/>
				  ))
				: null}
			<NewTab onClick={createNewFile} verbose={noTabsOpen} />
		</React.Fragment>
	);
};

const mapStateToProps = (state: StoreState) => ({
	openTab: state.editor.openTab,
	documents: state.editor.openFiles,
	minimized: state.editor.minimized,
	expanded: state.editor.expanded,
});

export default connect(mapStateToProps, {
	setOpenTab,
	createNewFile,
	setCloseTab,
	closeEditor,
	maximizeEditor,
	minimizeEditor,
	collapseEditor,
	expandEditor,
	renameFile,
})(Component);
