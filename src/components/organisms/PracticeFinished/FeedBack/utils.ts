/***
 * This function uses two other functions, getFeedbackString and errorWord to generate feedback according to the error amount provided.
 */
export const getFeedback = (errorItems: number) => {
    /**
     * errorWord determines whether the error is plural or singular. Where all numbers ending in 1 except for 11 is pronounced in the singular form villa
     */
    const errorWord = (errorItems: number) => {
        if (errorItems % 10 === 1 && errorItems != 11) return "villa";
        return "villur";
    };
    /**
     * getFeedbackString generates the correct feedback and is determined by how many errorItems there are
     * This can be expanded into greater depths analyzing things like what words are being written poorly etc...
     */
    const getFeedbackString = (errorItems: number) => {
        if (errorItems === 0) return " Æðislegt! engar villur. Vel Gert!";

        if (errorItems < 3) return " Næstum því fullkomið. Vel Gert!";

        if (errorItems < 5) return " Næstum því fullkomið. Vel Gert!";

        if (errorItems >= 5)
            return " Þetta hefði mátt fara betur. Prufaðu aftur";
    };
    return (
        errorItems +
        " " +
        errorWord(errorItems) +
        "! " +
        getFeedbackString(errorItems)
    );
};
