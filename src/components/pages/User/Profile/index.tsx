import React from "react";
import { LayoutWrapper } from "../../../../layout";
import { UserProfile } from "../../../";
import { ProtectPageWrapper } from "../../../../hoc";

export default () => {
    return (
        <ProtectPageWrapper>
            <LayoutWrapper>
                <UserProfile />
            </LayoutWrapper>
        </ProtectPageWrapper>
    );
};
