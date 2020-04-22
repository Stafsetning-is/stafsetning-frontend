import React from "react";
import { LiveForm } from "../../../";
import { formRecipe } from "./formRecipe";
import { ProtectPageWrapper } from "../../../../hoc";

export default () => (
    <ProtectPageWrapper>
        <LiveForm fields={formRecipe} postTo="" onSuccess={() => {}} />
    </ProtectPageWrapper>
);
