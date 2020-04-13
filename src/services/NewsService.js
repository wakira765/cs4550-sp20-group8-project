import {LOCALHOST_API, FDA_ALERT_URL} from "../constants";

export const findLatestNews = () => {
    return fetch(`${LOCALHOST_API}/news`)
        .then(response => response.json())
};

export const findNewsForUserConditions = (userId) => {
    return fetch(`${LOCALHOST_API}/users/${userId}/news`)
        .then(response => response.json())
};

export const getAlerts = async () => {
    const response = await fetch(FDA_ALERT_URL, {
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json();
}

export default {
    findLatestNews,
    getAlerts,
    findNewsForUserConditions
}
