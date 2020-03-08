export const FIND_DRUGS_BY_NAME = "FIND_DRUGS_BY_NAME";
export const findDrugsByNameAction = (drugs) => ({
    type: FIND_DRUGS_BY_NAME,
    drugs: drugs
});