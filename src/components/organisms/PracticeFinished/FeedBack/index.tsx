import React from "react";
import { IProps } from "./interface";
import { getFeedback } from "./utils";

import { Feedback } from "./styles";

/**
 * Here we want to generate feedback depending on the number "lenght" of the errors
 *
 */

export default ({ errorItems }: IProps) => {
    return <Feedback>{getFeedback}</Feedback>;
};
