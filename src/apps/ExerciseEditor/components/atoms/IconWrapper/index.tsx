import React from "react";
import { IProps } from "./interface";
import { Wrapper } from "./styles";
import { getClickId } from "./utils";
const DOUBLE_CLICK_DELAY = 300;

export const IconWrapper = ({
	children,
	onClick,
	onDoubleClick,
	onRightClick,
}: IProps) => {
	let lastClick = "";
	let lastClickTime = new Date().getTime();
	let lastDoubleClick = new Date().getTime();

	const handleClick = (event: React.MouseEvent) => {
		const currClickTime = new Date().getTime();
		lastClick = getClickId();
		if (currClickTime - lastClickTime < DOUBLE_CLICK_DELAY) return;
		lastClickTime = currClickTime;
		setTimeout(() => handleSingleClick(lastClick, event), DOUBLE_CLICK_DELAY);
	};

	const handleSingleClick = (clickId: string, event: React.MouseEvent) => {
		if (clickId !== lastClick) return;
		if (new Date().getTime() - lastDoubleClick < DOUBLE_CLICK_DELAY) return;
		onClick();
	};

	const handleDoubleClick = (event: React.MouseEvent) => {
		lastDoubleClick = new Date().getTime();
		onDoubleClick();
	};

	const handleRightClick = (event: React.MouseEvent) => {
		onRightClick();
	};

	return (
		<Wrapper
			onClick={handleClick}
			onDoubleClick={handleDoubleClick}
			onContextMenu={handleRightClick}
		>
			{children}
		</Wrapper>
	);
};
