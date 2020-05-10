import React from "react";
import { Frame, Button } from "./styles";
import { IProps } from "./interface";
import { DRAWER_LIST } from "./utils";
import { setOpenDrawer } from "../../../../actions";
import { StoreState } from "../../../../reducers";
import { connect } from "react-redux";

/**
 * A component for the drawer that is currently open
 */
const Component = ({ setOpenDrawer, openDrawer }: IProps) => {
    return (
        <Frame>
            {DRAWER_LIST.map(({ label, drawerType }) => (
                <Button
                    key={label}
                    onClick={() => setOpenDrawer(drawerType)}
                    theme={{ selected: drawerType === openDrawer }}
                >
                    {label}
                </Button>
            ))}
        </Frame>
    );
};

const mapStateToProps = (state: StoreState) => ({
    openDrawer: state.userProfile.openDrawer
});

export default connect(mapStateToProps, {
    setOpenDrawer
})(Component);
