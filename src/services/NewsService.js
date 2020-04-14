import {LOCALHOST_API, FDA_ALERT_URL} from "../constants";

export const findLatestNews = () => {
    return fetch(`${LOCALHOST_API}/news`)
        .then(response => response.json())
};

export const findNewsForUserConditions = (userId) => {
    return fetch(`${LOCALHOST_API}/users/${userId}/news`)
        .then(response => response.json())
};

export const getLatestRecalls = () => {
    return fetch(`${LOCALHOST_API}/recalls`)
        .then(response => response.json())
};

export default {
    findLatestNews,
    getLatestRecalls,
    findNewsForUserConditions
}
