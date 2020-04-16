import {LOCALHOST_API, FDA_ALERT_URL} from "../constants";

export const findLatestNews = () => {
    return fetch(`${LOCALHOST_API}/news`, {
        credentials: 'include'
    }).then(response => response.json())
};


export const getLatestRecalls = () => {
    return fetch(`${LOCALHOST_API}/recalls`)
        .then(response => response.json())
};

export default {
    findLatestNews,
    getLatestRecalls
}
