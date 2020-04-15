import React, { useState } from "react";
import { IProps } from "./interface";
import { CharacterSpan, ErrorSpan, TypedError } from "./styles";

export default ({ char, error }: IProps) => {
	const [showError, setShowError] = useState(false);

	if (error === " ") error = "óþarfa bil";
	if (error === ".") error = "óþarfa punktur";
	if (error === ",") error = "óþarfa komma";

	const typedError = showError ? <TypedError>{error}</TypedError> : null;

	if (error)
		return (
			<ErrorSpan
				onMouseEnter={() => setShowError(true)}
				onMouseLeave={() => setShowError(false)}
			>
				{char}
				{typedError}
			</ErrorSpan>
		);
	return <CharacterSpan>{char}</CharacterSpan>;
};
