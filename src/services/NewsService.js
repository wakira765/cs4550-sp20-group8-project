import {LOCALHOST_API} from "../constants";

export const findLatestNews = () => {
    return fetch(`${LOCALHOST_API}/news`)
        .then(response => response.json())
};

export default {
    findLatestNews
}
