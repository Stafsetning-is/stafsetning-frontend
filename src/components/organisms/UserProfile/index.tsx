import React, { Fragment } from "react";
import UserProfileDetails from "./UserProfileDetails";
import { UserProfileFinished } from "./UserProfileFinished";
import { UserProfileSaved } from "./UserProfileSaved";
import Drawer from "./Drawer";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";

const Component = ({ user }: IProps) => {
    return (
        <Fragment>
            <UserProfileDetails {...user} />
            <Drawer />
            <UserProfileFinished />
        </Fragment>
    );
};

const mapStateToProps = (store: StoreState) => ({
    user: store.auth.user,
});

export const UserProfile = connect(mapStateToProps)(Component);
