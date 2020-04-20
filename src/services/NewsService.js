import {SOURCE} from "../constants";

export const findLatestNews = () => {
    return fetch(`${SOURCE}/news`, {
        credentials: 'include'
    }).then(response => response.json())
};


export const getLatestRecalls = () => {
    return fetch(`${SOURCE}/recalls`, {
        credentials: 'include'
    })
        .then(response => response.json())
};

export const findNewsBySearchTerm = (searchTerm) => {
    return fetch(`${SOURCE}/news/${searchTerm}`)
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
    return fetch(`${SOURCE}/recalls/${range}`)
        .then(response => response.json())
};

export default {
    findLatestNews,
    getLatestRecalls,
    findNewsBySearchTerm,
    findRecallsByDateRange
}
