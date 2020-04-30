import React from "react";
import { Frame, Button } from "./styles";
import { IProps } from "./interface";
import { DRAWER_LIST } from "./utils";
import { setOpenDrawer } from "../../../../actions";
import { connect } from "react-redux";
/* Should contain a line and under the line we have a two clickable options */

const Component = ({ setOpenDrawer }: IProps) => {
    return (
        <Frame>
            {DRAWER_LIST.map((item) => (
                <Button key={item.label} onClick={() => setOpenDrawer(item.drawerType)}>
                    {item.label}
                </Button>
            ))}
        </Frame>
    );
};

export default connect(null, {
    setOpenDrawer
})(Component);