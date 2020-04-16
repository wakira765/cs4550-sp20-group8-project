import {LOCALHOST_API} from "../constants";

export const findLatestNews = () => {
    return fetch(`${LOCALHOST_API}/news`, {
        credentials: 'include'
    }).then(response => response.json())
};


export const getLatestRecalls = () => {
    return fetch(`${LOCALHOST_API}/recalls`)
        .then(response => response.json())
};

export const findNewsBySearchTerm = (searchTerm) => {
    return fetch(`${LOCALHOST_API}/news/${searchTerm}`)
        .then(response => response.json())
};

export default {
    findLatestNews,
    getLatestRecalls,
    findNewsBySearchTerm
}
