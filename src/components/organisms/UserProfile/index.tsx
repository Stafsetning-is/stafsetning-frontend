import React, { Fragment } from "react";
import UserProfileDetails from "./UserProfileDetails";
import { UserProfileOverview } from "./UserProfileOverview";
import Drawer from "./Drawer";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";

const Component = ({ user }: IProps) => {
    return (
        <Fragment>
            <UserProfileDetails {...user} />
            <Drawer />
            <UserProfileOverview />
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    user: store.auth.user,
});

export const UserProfile = connect(mapStateToProps)(Component);
