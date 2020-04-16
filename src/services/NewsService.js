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

/**
 * Finds recalls given to date ranges.
 * The format of the from and to must be: 'yyyymmdd'.
 * Example: Jan 31st 2020 => 20200131
 * @param from
 * @param to
 * @returns {Promise<any>}
 */
export const findRecallsByDateRange = (from, to) => {
    const range = `${from}+${to}`;
    return fetch(`${LOCALHOST_API}/recalls/${range}`)
        .then(response => response.json())
};

export default {
    findLatestNews,
    getLatestRecalls,
    findNewsBySearchTerm,
    findRecallsByDateRange
}
