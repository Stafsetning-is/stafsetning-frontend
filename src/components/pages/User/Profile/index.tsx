import React from "react";
import { UserProfile } from "../../../";
import { ProtectPageWrapper } from "../../../../hoc";

export default () => {
	return (
		<ProtectPageWrapper>
			<UserProfile />
		</ProtectPageWrapper>
	);
};
