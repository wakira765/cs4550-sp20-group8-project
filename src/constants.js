// the rxclass api is used for mapping drugs to diseases they treat and vice versa
// additionally it is used for centralizing the variety of names a single drug can have
export const RX_CLASS_DRUG_URL = "https://rxnav.nlm.nih.gov/REST/rxclass";
// NHS api is used for gathering the actual information about a drug
// ttys: term types used for specificity of an ingredient
// IN : ingredient
// MIN: multiple ingredients
// PIN: precise ingredient
// BN : brand name
export const NHS_DRUG_URL = "https://api.nhs.uk/medicines"
export const NHS_KEY = "186d0815e1a2455480a935137956078a"
export const LOCALHOST_API = "http://localhost:8080/api"


// constants for the displaying status of the home page
export const DISPLAY_NEWS = "DISPLAY_NEWS"
export const DISPLAY_ALERTS = "DISPLAY_ALERTS"
export const WRITING_POST = "WRITING_POST"

// todo: move to back end server
// constant for getting FDA recall alerts
export const FDA_ALERT_URL = "https://api.fda.gov/drug/enforcement.json?search=report_date:[20180101+TO+20191231]&limit=7"
// api for the news
// remember to attribute credit
export const NEWS_API_KEY = "415d7db55ddb47fda712faf160ee2cb4"
export const NEWS_URL = "http://newsapi.org/v2/everything?q=drugs&from=2020-04-07sortBy=popularity&apiKey=415d7db55ddb47fda712faf160ee2cb4"