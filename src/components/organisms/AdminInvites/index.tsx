import React from "react";
import { Table } from "../../";
import Row from "./Row";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { IProps } from "./interface";
import { InfoPage } from "../../";
import { TEXT, TITLE } from "./utils";

/**
 * AdminInvites component is used to see the list of pending admins.
 * When the list is empty it returns a text so the user of the site
 * sees more than an empty page.
 * Else it shows the list of admins waiting to get accepted
 */
const Component = ({ invites }: IProps) => {
    if (invites.length === 0)
        return <InfoPage type="not-found" title={TITLE} text={TEXT} />;
    return (
        <Table>
            {invites.map((invite) => (
                <Row {...invite} />
            ))}
        </Table>
    );
};

const mapStateToProps = (state: StoreState) => ({
    invites: state.auth.pendingAdminInvite
});

export const AdminInvites = connect(mapStateToProps)(Component);
