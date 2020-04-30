import React from 'react';
import { connect } from "react-redux";
import { IProps } from "./interface";
import { StoreState } from "../../../../reducers";

const Component = ({ type, children, openDrawer }: IProps) => {
    if (type !== openDrawer) return null;
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
};

const mapStateToProps = (state: StoreState) => ({
    openDrawer: state.userProfile.openDrawer,
});

export default connect(mapStateToProps)(Component);