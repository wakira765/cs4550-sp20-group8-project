import { FDA_ALERT_URL, NEWS_URL} from "../constants";

export const getAlerts = async () => {
    const response = await fetch(FDA_ALERT_URL, {
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json();
}

export const getNews = async () => {
    const response = await fetch(NEWS_URL)
    return await response.json();
}


export default {
    getAlerts,
    getNews
}