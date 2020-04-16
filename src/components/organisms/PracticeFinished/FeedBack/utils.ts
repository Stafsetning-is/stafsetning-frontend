/***
 * This function generates feedback according to error amount
 */
export const getFeedback = (errorItems: number) => {
    if (errorItems === 0) return "Vá engar villur. Vel Gert!";
    if (errorItems < 4) return " Vel Gert!";
    if (errorItems < 8) return "! Þetta hefði mátt fara betur. Prufaðu aftur";
};
