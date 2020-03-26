import {RX_CLASS_DRUG_URL, NHS_DRUG_URL, NHS_KEY} from "../constants";
import $ from 'jquery';


// Used for mapping drug names to its concept for centralzied information
export const findDrugConcept = (drugName) => {
    return fetch(`${RX_CLASS_DRUG_URL}/class/byDrugName.json?drugName=${drugName}&relaSource=MEDRT&relas=has_ingredient&trans=0&ttys=IN`)
        .then(response => response.json())
        .then(data => data.rxclassDrugInfoList.rxclassDrugInfo)
        .then(drugInfo => {
            for (var i=0; i < drugInfo.length; i++) {
                if (drugInfo[i].minConcept.tty === "IN") {
                    console.log(drugInfo[i].minConcept.name)
                }
            }
        })
};

// finding drugs that treat the given disease
export const findDrugsByDisease = (diseaseName) => {
    return fetch(`${RX_CLASS_DRUG_URL}/class/byName.json?className=${diseaseName}`)
        .then(response => response.json())
        .then(data => data.rxclassMinConceptList.rxclassMinConcept[0].classId)
        .then(classId => findDrugsByDiseaseId(classId))
}

const findDrugsByDiseaseId = (classId) => {
    console.log(classId)
    return fetch(`${RX_CLASS_DRUG_URL}/classMembers.json?classId=${classId}&relaSource=MEDRT&rela=may_treat&trans=0&ttys=IN`)
    .then(response => response.json())
    .then(data => data.drugMemberGroup.drugMember)
    .then(drugList => {
        var drugs = new Array()
        for (var i=0; i < drugList.length; i++) {
            drugs.push(drugList[i].minConcept.name)
        }
        return drugs
    })
}

export const findDrugsByName = (drugName) => {
    return findDrugConcept(drugName)
}

export const getDrugSideEffects = (drugName) => {
    //let drugConcept = findDrugConcept(drugName) // ibuprofen --> ibuprofen-for-adults
    return fetch(`${NHS_DRUG_URL}/${drugName}`, {
        headers: {
            'Content-Type': 'application/json',
            'subscription-key': NHS_KEY
        }
    })
    .then(response => response.json())
    .then(data => data.mainEntityOfPage)
    .then(pages => {
        var side_effects = new Array()
        for (var i=0; i < pages.length; i++) {
            if (pages[i].headline === "Side effects") {
                var se_html = $(pages[i].mainEntityOfPage[0].text).children()
                console.log(se_html)
                for (var f=0; f < se_html.length; f++) {
                    side_effects.push(console.log($(se_html[f]).text()))
                }
            }
        }
        console.log(side_effects)
    })
}


export default {
    findDrugsByName, findDrugsByDisease, getDrugSideEffects
}
