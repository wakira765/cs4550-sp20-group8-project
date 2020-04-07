import {LOCALHOST_API} from "../constants";

/**
 * Finds an array of drugs matching the given drug name.
 * The drug name can be either generic or a brand name.
 * The result is an array of drugs info.
 * @param drugName
 * @returns {Promise<any>}
 */
export const findAllDrugsByName = (drugName) => {
    return fetch(`${LOCALHOST_API}/${drugName}`)
        .then(response => response.json())
};

/**
 * Finds a drug given its product_ndc id.
 * Returns the drug info as a single object containing a field
 * named 'properties', which is an object containing all the info
 * of a drug.
 * To view all the fields, please make call on API and check result.
 * @param ndc
 * @returns {Promise<any>}
 */
export const findDrugByNdc = (ndc) => {
    return fetch(`${LOCALHOST_API}/drugs/${ndc}`)
        .then(response => response.json())
};

/**
 * Gets all the treatments (drugs) for a given disease as an array of strings.
 * @param diseaseName
 * @returns {Promise<any>}
 */
export const findAllTreatmentsByDiseaseName = (diseaseName) => {
    return fetch(`${LOCALHOST_API}/treatments/${diseaseName}`)
        .then(response => response.json())
};

/**
 * Finds all the side effects of a drug given its product_ndc id and returns it as an array of strings.
 * @param ndc
 * @returns {Promise<any>}
 */
export const findSideEffectsByNdc = (ndc) => {
    return fetch(`${LOCALHOST_API}/side_effects/${ndc}`)
        .then(response => response.json())
};

export default {
    findDrugByNdc,
    findAllDrugsByName,
    findAllTreatmentsByDiseaseName,
    findSideEffectsByNdc
}
