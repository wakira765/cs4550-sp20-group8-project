import {HEROKU_API, FDA_ALERT_URL} from "../constants";

export const findLatestNews = () => {
    return fetch(`${HEROKU_API}/news`)
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
    findLatestNews
}
