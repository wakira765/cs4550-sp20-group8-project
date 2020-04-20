
export const LOCALHOST_API = "http://localhost:8080/api";


// constants for the displaying status of the home page
export const DISPLAY_NEWS = "DISPLAY_NEWS";
export const DISPLAY_LANDING_PAGE = "DISPLAY_LANDING_PAGE";

// todo: move to back end server
// constant for getting FDA recall alerts
export const FDA_ALERT_URL = "https://api.fda.gov/drug/enforcement.json?search=report_date:[20180101+TO+20191231]&limit=7"
// api for the news
// remember to attribute credit
export const NEWS_API_KEY = "415d7db55ddb47fda712faf160ee2cb4"
export const NEWS_URL = "http://newsapi.org/v2/everything?q=drugs&from=2020-04-07sortBy=popularity&apiKey=415d7db55ddb47fda712faf160ee2cb4"
export const HEROKU_API = "https://cs4550-project-server.herokuapp.com/api/"


export const SOURCE = LOCALHOST_API;

export const NEWS_API_CREDIT = "powered by NewsAPI.org";
export const NEWS_API_URL = "https://newsapi.org/";

// name of the webapp in the works
export const WEBAPP_NAME ="PharmaNETx"


// about page
export const GET_INFORMED_PARA="Through our site you can search up the name of drugs and medicine, their brand names or generic names, and retrieve detailed information on their use cases, side effects, ingredients and much more!";
export const ITS_PERSONAL_PARA="Drugs, unfortunately, are not 'one-size fits all'. They work for some, but won't work for others. That's because everyone's unique, so of course our biology is too! Signing up let's you personalize your experience with us. The more personalized your account is the easier it'll be to find someone who with a similar experience.";
export const NET_EFFECT_PARA="It takes time to develop a drug. Even then, it won't work for everyone. Some people will have to experiment with a few to find the right one. We try to make your journey a bit easier, by letting users connect with those who are similar to each other and share their experiences. A 50 year old male is obviously biologically different from a female in her early 20's. How could we expect their experience to be the same?";
export const FIND_WHATS_RIGHT_PARA="Remember, you're not alone. We may be unique, but we also share some similarities. There's a good chance, the road your on has already been traveled or there could be others traveling it with you. We just make it easier to connect with those people.";

export const ABOUT_US_HOME="PharmaNetX is a unique web application that combines detailed drug information provided by the FDA with the power of social networking to better inform our users of the right pharmaceutical treatment for them. Look up basic facts about drugs you're interested in or read the comments and experiences from other users who have similar profiles to you."