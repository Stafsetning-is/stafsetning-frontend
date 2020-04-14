/**
 * get textual representation of best attemt
 * @param bestAttempt decimal number
 */
export const bestPractice = (bestAttempt: number | undefined) => {
    if (!bestAttempt) return "";
    return `Besta tilraun ${Math.round(bestAttempt * 100)}%`;
};

export const getPracticeLink = (exerciseId: string) => {
    return `/practice/${exerciseId}`;
};
