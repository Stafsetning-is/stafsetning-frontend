import React from "react";
import { IProps } from "./interface";
import { Wrapper } from "./styles";
import { getClickId, DOUBLE_CLICK_DELAY } from "./utils";

/**
 * Wrapper that must be wrapped
 * around all icons on the desktop
 *
 * This wrapper handles the clickin, double clicking
 * and right clicking on the icon
 */
export const IconWrapper = ({
	children,
	onClick,
	onDoubleClick,
	onRightClick,
}: IProps) => {
	// id of last click
	let lastClick = "";
	// when was the last click performend
	let lastClickTime = new Date().getTime();
	// when was the last double click performend
	let lastDoubleClick = new Date().getTime();

	/**
	 * responds to the click by checking via a time out if the
	 * click is a double click or not
	 */
	const handleClick = (event: React.MouseEvent) => {
		const metakey = hasMetaKey(event);
		const currClickTime = new Date().getTime();
		lastClick = getClickId();
		if (currClickTime - lastClickTime < DOUBLE_CLICK_DELAY) return;
		lastClickTime = currClickTime;
		setTimeout(
			() => handleSingleClick(lastClick, metakey),
			DOUBLE_CLICK_DELAY
		);
	};

	/**
	 * if there is a new most recent click id
	 * then the single click was in fact a double click
	 * and we do nothing
	 */
	const handleSingleClick = (clickId: string, metakey: boolean) => {
		if (clickId !== lastClick) return;
		if (new Date().getTime() - lastDoubleClick < DOUBLE_CLICK_DELAY) return;
		onClick(metakey);
	};

	// emits double click event
	const handleDoubleClick = (event: React.MouseEvent) => {
		lastDoubleClick = new Date().getTime();
		onDoubleClick(hasMetaKey(event));
	};

	// emits right click event
	const handleRightClick = (event: React.MouseEvent) => {
		onRightClick(hasMetaKey(event));
	};

	// check if the ctr or cmd key was pressed alongside click
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
