export const FIND_DRUGS_BY_NAME = "FIND_DRUGS_BY_NAME";
export const FIND_DRUGS_BY_DISEASE = "FIND_DRUGS_BY_DISEASE";
export const GET_DRUG_SIDE_EFFECTS = "GET_DRUG_SIDE_EFFECTS";

export const findDrugsByNameAction = (drugs) => ({
    type: FIND_DRUGS_BY_NAME,
    drugs: drugs
});

export const findDrugsByDiseaseAction = (drugs) => ({
    type: FIND_DRUGS_BY_DISEASE,
    drugs: drugs
});

export const getDrugSideEffectsAction = (sideEffects) => ({
    type: GET_DRUG_SIDE_EFFECTS,
    sideEffects: sideEffects
});

