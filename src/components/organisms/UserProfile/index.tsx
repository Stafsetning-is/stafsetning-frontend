import * as React from "react";
//import { IProps } from "./interface";
import UserProfileDetails from "./UserProfileDetails";
/* 2 components (a kröfur) 1 for the picture and name
the other for excercises that the user has finished 
<UserProfileDetails>
<OverviewPage>
*/

export const UserProfile = () => {
    return <UserProfileDetails userName="nanna" userImage="" />;
};
