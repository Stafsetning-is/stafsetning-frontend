import { Exercise } from "../../../../models";
import { GrammarRule } from "./interface";

/**
 * Counts all grammar rules found in selection
 * of exercises
 */
export const countRules = (exercises: Exercise[]) => {
    const rules = reduceRulesFromExercises(exercises);
    return removeDuplicateRulesAndCount(rules);
};

/**
 * Takes exercises and returns all rules for these exercises
 */
const reduceRulesFromExercises = (exercises: Exercise[]) => {
    return exercises.reduce<GrammarRule[]>((prev, { report }) => {
        const rules = Object.keys(report).map((key) => ({
            ...report[key],
            id: key
        }));
        return [...prev, ...rules];
    }, []);
};

/**
 * Counts rules and returns sorted array of most occurrences
 */
const removeDuplicateRulesAndCount = (rules: GrammarRule[]) => {
    const ruleObject: { [key: string]: GrammarRule } = {};
    rules.forEach((rule) => {
        if (!ruleObject[rule.id]) {
            ruleObject[rule.id] = rule;
            ruleObject[rule.id].count = 1;
            return;
        }
        ruleObject[rule.id].count++;
    });
    const retArray = Object.keys(ruleObject).map((key) => ruleObject[key]);
    retArray.sort((a, b) => b.count - a.count);
    return retArray;
};
