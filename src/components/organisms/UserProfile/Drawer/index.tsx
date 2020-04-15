import React from "react";
import { Frame, Button } from "./styles";
/* Should contain a line and under the line we have a two clickable options */

export default () => {
    return (
        <Frame>
            <Button>Kláraðar æfingar</Button>
            <Button>Vistaðar æfingar</Button>
        </Frame>
    );
};
