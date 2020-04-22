import React from "react";
import { IProps } from "./interface";

export default ({ name, onClick }: IProps) => {
	return (
		<div>
			<span>{name}</span>
		</div>
	);
};
