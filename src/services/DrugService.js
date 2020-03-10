import {LOCALHOST_URL} from "../constants";

export const findDrugsByName = (drugName) => {
    return fetch(`${LOCALHOST_URL}/drugs/${drugName}`)
        .then(response => response.json())
};

export const findAssociatedDiseasesByDrugName = (drugName) => {
    return fetch(`${LOCALHOST_URL}/class/byDrugName.json?drugName=${drugName}&relaSource=MEDRT&relas=may_treat`)
        .then(response => response.json())
};

export default {
    findDrugsByName
}
