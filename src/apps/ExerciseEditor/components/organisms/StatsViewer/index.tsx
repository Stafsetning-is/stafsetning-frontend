import React from "react";
import { InfoPage, Table } from "../../../../../components";
import { TEXT, TITLE } from "./utils";
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../reducers";
import Row from "./Row";

/**
 * The stats viewer for an admin
 * displays the files with their complete count
 * in decreasing order
 */
const Component = ({ files }: IProps) => {
	// returns InfoPage if no files present
	if (files.length === 0)
		return <InfoPage type="error" title={TITLE} text={TEXT} />;

	// sorts the files by complete count
	files.sort((a, b) => b.counter - a.counter);

	// finds the highest count of all files
	const highestCount = files.reduce((prev, curr) => {
		if (curr.counter > prev) return curr.counter;
		return prev;
	}, 0);

	return (
		<React.Fragment>
			<Table>
				{files.map((file) => (
					<Row {...file} countRatio={file.counter / highestCount} />
				))}
			</Table>
		</React.Fragment>
	);
};

const mapStateToProps = (state: StoreState) => ({
	files: [...state.desktop.files],
});

export const StatsViewer = connect(mapStateToProps)(Component);
