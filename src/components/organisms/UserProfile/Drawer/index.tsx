import React, { MouseEvent } from "react";
import { Frame, Button } from "./styles";
import { Drawers } from "./interface";
import { DRAWER_LIST } from "./utils";
/* Should contain a line and under the line we have a two clickable options */

export default () => {
    const handleClick = (toOpen: Drawers) => {};
    //const button =  ? kláraðar : vistaðar
    return (
        <Frame>
            {DRAWER_LIST.map((item) => (
                <Button onClick={() => handleClick(item.drawerType)}>
                    {item.label}
                </Button>
            ))}
        </Frame>
    );
};
