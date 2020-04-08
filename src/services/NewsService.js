import {HEROKU_API} from "../constants";

export const findLatestNews = () => {
    return fetch(`${HEROKU_API}/news`)
        .then(response => response.json())
};

export default {
    findLatestNews
}
