import {LOCALHOST_API} from "../constants";

/**
 * Adds a new drug subscription to the given user id.
 * The subscription object requires the following field:
 * - productNdc: the project ndc of the drug the user is subscribing
 * @param sub
 * @returns {Promise<any>}
 */
export const createDrugSubscription = (sub) => {
    return fetch(`${LOCALHOST_API}/subscriptions`, {
        method: "POST",
        body: JSON.stringify(sub),
        credentials: 'include',
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
};

export const findSubscriptionsByUserId = (userId) => {
    return fetch(`${LOCALHOST_API}/users/${userId}/subscriptions`)
        .then(response => response.json())
};

export default {
    createDrugSubscription,
    findSubscriptionsByUserId
}
