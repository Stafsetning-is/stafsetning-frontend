import React, { useState, useMemo } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { EditorFrame, EditorOuter, EditorHeader, HeaderItem } from "./styles";
import { INITIAL_TEXT, textToNodeArray, getWordCountString } from "./utils";
import { IProps } from "./interface";

export const PlainTextEditor = ({ onChange }: IProps) => {
	const [value, setValue] = useState<string>(INITIAL_TEXT);
	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
		if (event.key == "Enter") event.preventDefault();
	};

	const handleChange = (nodes: Node[]) => {
		// forcefully destructuring editors notes to get plain text
		const text = [...[...nodes].shift()?.children].shift().text;
		onChange(text);
		setValue(text);
	};

	return (
		<EditorOuter>
			<EditorHeader>
				<HeaderItem> </HeaderItem>
				<HeaderItem>{getWordCountString(value)}</HeaderItem>
			</EditorHeader>
			<EditorFrame>
				<Slate
					editor={editor}
					value={textToNodeArray(value)}
					onChange={handleChange}
				>
					<Editable
						placeholder="Hér getur þú búið til æfingu"
						onKeyDown={onKeyDown}
					/>
				</Slate>
			</EditorFrame>
		</EditorOuter>
	);
};
