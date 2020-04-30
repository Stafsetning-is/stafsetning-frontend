import React from "react";
import { LiveForm } from "../../../";
import { formRecipe1, formRecipe2 } from "./formRecipe";
import { ProtectPageWrapper } from "../../../../hoc";

export default () => (
    <ProtectPageWrapper>
        <div>hello</div>
        <LiveForm fields={formRecipe1} postTo="" onSuccess={() => {}} />
        {/* <LiveForm fields={formRecipe2} postTo="" onSuccess={() => {}} /> */}
    </ProtectPageWrapper>
);
