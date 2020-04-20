/**
 * get textual representation of best Attempt
 * @param bestAttempt decimal number
 */
export const bestPractice = (bestAttempt: number | undefined) => {
    if (!bestAttempt) return "Þú hefur ekki gert þessa æfingu!";
    return `Besta tilraun ${Math.round(bestAttempt * 100)}%`;
};

export const getPracticeLink = (exerciseId: string) => {
    return `/practice/${exerciseId}`;
};

export const isCompleted = (completed: boolean) => {
    if (completed) return "Þú hefur gert þessa æfingu áður";
    else {
        return "Þú átt eftir að gera þessa æfingu!";
    }
};
