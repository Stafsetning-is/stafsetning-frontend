import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { UIButton } from "../../";
import { IProps } from "./interface";
import { Redirect, NavLink } from "react-router-dom";
import { InfoPage } from "../../../../../components";
import { TEXT, TITLE } from "./utils";

/**
 * publish success landing page when a file is published
 */
const Component = ({ exerciseId }: IProps) => {
	// if there is no exercise that was published, go back to desktop
	if (!exerciseId) return <Redirect to="/app/exercise-editor/" />;
	return (
		<InfoPage type="success" title={TITLE} text={TEXT}>
			<div>
				<NavLink to={`/exercise/practice/${exerciseId}`}>
					<UIButton label="Skoða æfingu" onClick={() => {}} />
				</NavLink>
				<NavLink to="/app/exercise-editor/">
					<UIButton label="Halda áfram" onClick={() => {}} />
				</NavLink>
			</div>
		</InfoPage>
	);
};

const mapStateToProps = (state: StoreState) => ({
	exerciseId: state.publisher.completedFileId,
});

export default connect(mapStateToProps)(Component);
