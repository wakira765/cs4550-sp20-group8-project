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

export const HEROKU_API = "https://cs4550-project-server.herokuapp.com/api/"
