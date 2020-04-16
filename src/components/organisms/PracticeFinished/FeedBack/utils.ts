/***
 * This function generates feedback according to error amount
 */
export const getFeedback = (errorItems: number) => {
    const errorWord = errorItems % 10 === 1 ? "villa" : "villur";

    if (errorItems === 0)
        return "  " + errorWord + " Æðislegt! engar villur. Vel Gert!";

    if (errorItems < 4) return "  " + errorWord + " Vel Gert!";
    if (errorItems > 6)
        return (
            "  " + errorWord + "! Þetta hefði mátt fara betur. Prufaðu aftur"
        );
};
