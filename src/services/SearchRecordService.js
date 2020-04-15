import {LOCALHOST_API} from "../constants";


/**
 * Creates a new search record for the given user id.
 * The record object requires the following fields:
 * - searchText: the search text
 * - valueType: can be one of DRUG or CONDITION
 * @param userId
 * @param record
 * @returns {Promise<any>}
 */
export const createSearchRecord = (userId, record) => {
    return fetch(`${LOCALHOST_API}/users/${userId}/searches`, {
        method: "POST",
        body: JSON.stringify(record),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
};

export const findSearchRecordsByUserId = (userId) => {
    return fetch(`${LOCALHOST_API}/users/${userId}/searches`)
        .then(response => response.json())
};

export default {
    createSearchRecord,
    findSearchRecordsByUserId
}
