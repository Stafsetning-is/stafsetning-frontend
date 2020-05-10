import { TutorialItem } from "./interface";
import { LocalStorageService } from "../../services";
import md5 from "md5";

// creates cache key with md5 hash
const cacheKey = (item: TutorialItem, userId: string) =>
	md5(`${item.type}${userId}`);

/**
 * makes an tutorial item completed
 * @param item the tutorial Item to mark as completed
 * @param userId user that complete the item
 */
export const markAsCompleted = async (
	item: TutorialItem,
	userId: string
): Promise<void> => {
	LocalStorageService.put(cacheKey(item, userId), "done");
};

/**
 * checks if a user has completed this tutorialItem
 * @param item the item to check
 * @param userId user to check for
 */
export const checkIfCompleted = async (
	item: TutorialItem,
	userId: string
): Promise<boolean> => {
	return !!LocalStorageService.get(cacheKey(item, userId));
};
