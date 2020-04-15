<<<<<<< HEAD
import {SOURCE} from "../constants";
=======
import {LOCALHOST_API} from "../constants";
>>>>>>> e837ebebec5df8adac8169c3e83d02b0c80016f1

/**
 * Finds an array of drugs matching the given drug name.
 * The drug name can be either generic or a brand name.
 * The result is an array of drugs info.
 * @param drugName
 * @returns {Promise<any>}
 */
export const findAllDrugsByName = (drugName) => {
<<<<<<< HEAD
    return fetch(`${SOURCE}/${drugName}`)
=======
    return fetch(`${LOCALHOST_API}/${drugName}`)
>>>>>>> e837ebebec5df8adac8169c3e83d02b0c80016f1
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
<<<<<<< HEAD
    return fetch(`${SOURCE}/drugs/${ndc}`)
=======
    return fetch(`${LOCALHOST_API}/drugs/${ndc}`)
>>>>>>> e837ebebec5df8adac8169c3e83d02b0c80016f1
        .then(response => response.json())
};

/**
 * Gets all the treatments (drugs) for a given disease as an array of strings.
 * @param diseaseName
 * @returns {Promise<any>}
 */
export const findAllTreatmentsByDiseaseName = (diseaseName) => {
<<<<<<< HEAD
    return fetch(`${SOURCE}/treatments/${diseaseName}`)
=======
    return fetch(`${LOCALHOST_API}/treatments/${diseaseName}`)
>>>>>>> e837ebebec5df8adac8169c3e83d02b0c80016f1
        .then(response => response.json())
};

/**
 * Finds all the side effects of a drug given its product_ndc id and returns it as an array of strings.
 * @param ndc
 * @returns {Promise<any>}
 */
export const findSideEffectsByNdc = (ndc) => {
<<<<<<< HEAD
    return fetch(`${SOURCE}/side_effects/${ndc}`)
=======
    return fetch(`${LOCALHOST_API}/side_effects/${ndc}`)
        .then(response => response.json())
};

/**
 * Finds all the comments for a drug given its product ndc.
 * @param ndc
 * @returns {Promise<any>}
 */
export const findDrugCommentsByNdc = (ndc) => {
    return fetch(`${LOCALHOST_API}/drugs/${ndc}/comments`)
>>>>>>> e837ebebec5df8adac8169c3e83d02b0c80016f1
        .then(response => response.json())
};

export default {
    findDrugByNdc,
    findAllDrugsByName,
    findAllTreatmentsByDiseaseName,
    findSideEffectsByNdc,
    findDrugCommentsByNdc
}
