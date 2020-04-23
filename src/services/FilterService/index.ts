export interface FilterObject {
	minWordCount: number;
	maxWordCount: number;
	hideCompleted: boolean;
	filterGrammarRule: string[];
	quickFilter: QuickFilter;
}

export type QuickFilter = "none" | "hide-completed" | "show-saved";
