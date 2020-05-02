import React from "react";
import { LiveForm } from "../../../";
import { formRecipe1, formRecipe2 } from "./formRecipe";
import { ProtectPageWrapper } from "../../../../hoc";
import { changeDifficulty } from "../../../../actions";
import { DifficultyRes } from "./interface";

export default () => (
    <ProtectPageWrapper>
        <LiveForm<DifficultyRes>
            fields={formRecipe1}
            postTo="/api/v1/users/change_difficulty"
            onSuccess={({ difficulty }) => {
                changeDifficulty(difficulty);
            }}
        />
        {/*  <LiveForm fields={formRecipe2} postTo="" onSuccess={() => {}} /> */}
    </ProtectPageWrapper>
);
