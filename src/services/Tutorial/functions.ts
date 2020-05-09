import { TutorialItem } from "./interface";
import { LocalStorageService } from "../../services";
import md5 from "md5";

const cacheKey = (item: TutorialItem, userId: string) =>
	md5(`${item.type}${userId}`);

export const markAsCompleted = async (
	item: TutorialItem,
	userId: string
): Promise<void> => {
	console.log("4", 4);
	LocalStorageService.put(cacheKey(item, userId), "done");
};

export const checkIfCompleted = async (
	item: TutorialItem,
	userId: string
): Promise<boolean> => {
	return !!LocalStorageService.get(cacheKey(item, userId));
};
