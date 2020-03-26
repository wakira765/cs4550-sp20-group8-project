export const FIND_DRUG_DATA = "FIND_DRUG_DATA";

export const findDrugDataAction = (drugInfo) => ({
    type: FIND_DRUG_DATA,
    drugInfo: drugInfo
});
