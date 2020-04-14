import React, { Fragment } from "react";
//import { IProps } from "./interface";
import UserProfileDetails from "./UserProfileDetails";
import { UserProfileOverview } from "./UserProfileOverview";

/* 2 components 1 for the picture and name
the other for excercises that the user has finished 
*/

export const UserProfile = () => {
    return (
        <Fragment>
            <UserProfileDetails userName="nanna" userImage="" />
            <UserProfileOverview />
        </Fragment>
    );
};
