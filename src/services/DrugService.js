import {RX_CLASS_DRUG_URL} from "../constants";

export const findDrugsByName = (drugName) => {
    return fetch(`${RX_CLASS_DRUG_URL}/class/byDrugName.json?drugName=${drugName}`)
        .then(response => response.json())
};

export const findAssociatedDiseasesByDrugName = (drugName) => {
    return fetch(`${RX_CLASS_DRUG_URL}/class/byDrugName.json?drugName=${drugName}&relaSource=MEDRT&relas=may_treat`)
        .then(response => response.json().rxclassDrugInfoList.rxclassDrugInfo)
};

export default {
    findDrugsByName
}