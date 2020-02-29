import React, { useState } from "react";
import { IProps } from "./interface";
import { InputFactory } from "../../";

export const FormGenerator = ({ fields }: IProps) => {
	const [formObject] = useState(fields);

	const inputElementArray = [];
	for (const key in formObject) {
		inputElementArray.push({
			key: key,
			...formObject[key]
		});
	}

	return (
		<React.Fragment>
			{inputElementArray.map((element) => (
				<InputFactory {...element} onChange={(key, val) => console.log("hi")} />
			))}
		</React.Fragment>
	);
};
