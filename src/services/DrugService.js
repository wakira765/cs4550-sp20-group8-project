import {RX_CLASS_DRUG_URL, NHS_DRUG_URL, NHS_KEY} from "../constants";
import $ from 'jquery';


// Used for mapping drug names to its concept for centralzied information
export const findDrugConcept = (drugName) => {
    return fetch(`${RX_CLASS_DRUG_URL}/class/byDrugName.json?drugName=${drugName}&relaSource=MEDRT&relas=has_ingredient&trans=0&ttys=IN`)
        .then(response => response.json())
        .then(data => {
            const drugList = data.rxclassDrugInfoList.rxclassDrugInfo;
            let result = [];
            for (let drug of drugList) {
                if (drug.minConcept.tty === "IN") {
                    result.push(drug.minConcept.name);
                }
            }
            return result;
        })
};

// finding drugs that treat the given disease
export const findDrugsByDisease = (diseaseName) => {
    return fetch(`${RX_CLASS_DRUG_URL}/class/byName.json?className=${diseaseName}`)
        .then(response => response.json())
        .then(data => data.rxclassMinConceptList.rxclassMinConcept[0].classId)
        .then(classId => findDrugsByDiseaseId(classId))
};

const findDrugsByDiseaseId = (classId) => {
    return fetch(`${RX_CLASS_DRUG_URL}/classMembers.json?classId=${classId}&relaSource=MEDRT&rela=may_treat&trans=0&ttys=IN`)
    .then(response => response.json())
    .then(data => data.drugMemberGroup.drugMember)
    .then(drugList => {
        let drugs = [];
        for (let i=0; i < drugList.length; i++) {
            drugs.push(drugList[i].minConcept.name)
        }
        return drugs
    })
};

export const findDrugsByName = (drugName) => {
    return findDrugConcept(drugName)
};

export const getDrugSideEffects = (drugName) => {
    return findDrugConcept(drugName)
        .then(drugConcepts => {
            const concept = drugConcepts[0];
            return fetch(`${NHS_DRUG_URL}/${concept}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'subscription-key': NHS_KEY
                }
            })
                .then(response => response.json())
                .then(data => {
                    const pages = data.mainEntityOfPage;
                    let sideEffects = [];
                    for (let page of pages) {
                        if (page.headline === "Side effects") {
                            const se_html = $(page.mainEntityOfPage[0].text).children();
                            for (let se of se_html) {
                                sideEffects.push($(se).text());
                            }
                        }
                    }
                    return sideEffects
                })
        })
};

export const findDrugData = (drugConcept) => {
    return fetch(`${NHS_DRUG_URL}/${drugConcept}`, {
        headers: {
            'Content-Type': 'application/json',
            'subscription-key': NHS_KEY
        }
    })
        .then(response => response.json())
        .then(data => {
            const pages = data.mainEntityOfPage;
            let drugInfo = [];
            for (let page of pages) {
                let info = [];
                if (page.headline !== "Common questions") {
                    const htmlInfo = page.mainEntityOfPage[0]["text"];
                    info.push(htmlInfo);
                    drugInfo.push({
                        headline: page.headline,
                        info: info
                    });
                }
            }
            return drugInfo;
        })
};

export default {
    findDrugsByName, findDrugsByDisease, getDrugSideEffects, findDrugData
}
