import React, { useState } from "react";
import { IProps } from "./interface";
import { Button } from "./styles";

export default ({ toggle, value, text }: IProps) => {
	return (
		<Button theme={{ value }} onClick={() => toggle(!value)}>
			{text}
		</Button>
	);
};
