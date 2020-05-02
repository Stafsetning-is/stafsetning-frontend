import React from "react";
import { ProtectPageWrapper } from "../../../../hoc";
import { SettingsPage } from "../../../";

export default () => (
	<ProtectPageWrapper>
		<SettingsPage />
	</ProtectPageWrapper>
);
