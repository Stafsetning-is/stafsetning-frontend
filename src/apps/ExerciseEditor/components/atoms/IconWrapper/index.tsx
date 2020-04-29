import React from "react";
import { IProps } from "./interface";
import { Wrapper } from "./styles";
import { getClickId } from "./utils";
const DOUBLE_CLICK_DELAY = 150;

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
		const metakey = hasMetaKey(event);
		const currClickTime = new Date().getTime();
		lastClick = getClickId();
		if (currClickTime - lastClickTime < DOUBLE_CLICK_DELAY) return;
		lastClickTime = currClickTime;
		setTimeout(() => handleSingleClick(lastClick, metakey), DOUBLE_CLICK_DELAY);
	};

	const handleSingleClick = (clickId: string, metakey: boolean) => {
		if (clickId !== lastClick) return;
		if (new Date().getTime() - lastDoubleClick < DOUBLE_CLICK_DELAY) return;
		onClick(metakey);
	};

	const handleDoubleClick = (event: React.MouseEvent) => {
		lastDoubleClick = new Date().getTime();
		onDoubleClick(hasMetaKey(event));
	};

	const handleRightClick = (event: React.MouseEvent) => {
		onRightClick(hasMetaKey(event));
	};

	const hasMetaKey = (event: React.MouseEvent) => {
		return event.metaKey || event.ctrlKey;
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
