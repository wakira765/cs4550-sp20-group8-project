import {SOURCE, FDA_ALERT_URL} from "../constants";

export const findLatestNews = () => {
    return fetch(`${SOURCE}/news`)
        .then(response => response.json())
};

export const findNewsForUserConditions = (userId) => {
    return fetch(`${SOURCE}/users/${userId}/news`)
        .then(response => response.json())
};

export const getLatestRecalls = () => {
    return fetch(`${SOURCE}/recalls`)
        .then(response => response.json())
};

export default {
    findLatestNews,
    getLatestRecalls,
    findNewsForUserConditions
}
