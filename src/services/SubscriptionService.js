import {SOURCE} from "../constants";

/**
 * Adds a new drug subscription to the given user id.
 * The subscription object requires the following field:
 * - productNdc: the project ndc of the drug the user is subscribing
 * @param sub
 * @returns {Promise<any>}
 */
export const createDrugSubscription = (sub) => {
    return fetch(`${SOURCE}/subscriptions`, {
        method: "POST",
        body: JSON.stringify(sub),
        credentials: 'include',
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
};

export const findSubscriptionsByUserId = (userId) => {
    return fetch(`${SOURCE}/users/${userId}/subscriptions`)
        .then(response => response.json())
};

export const findCurrentUserSubscriptions = () => {
    return fetch(`${SOURCE}/subscriptions`, {
        credentials: 'include'
    })
        .then(response => response.json())
};

export default {
    createDrugSubscription,
    findSubscriptionsByUserId,
    findCurrentUserSubscriptions
}
