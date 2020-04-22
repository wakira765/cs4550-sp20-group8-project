import {FIND_DRUG_DATA, FIND_DRUG_COMMENTS, CREATE_DRUG_COMMENT, REMOVE_SUBSCRIPTION, SUBSCRIBE_TO_DRUG, USER, USER_SUBSCRIPTIONS} from "../actions/DrugActions";

const initialState = {
    drugInfo: [],
    comments: [],
    subscriptions: []
};

const DrugReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_DRUG_DATA:
            return {
                ...state,
                drugInfo: action.drugInfo
            };
        case FIND_DRUG_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };
        case CREATE_DRUG_COMMENT:
            return {
                ...state,
                comments: [
                    ...state.comments,
                    action.comment
                ]
            }
        case REMOVE_SUBSCRIPTION:
            return {
                ...state,
                subscriptions: state.subscriptions.filter(subscription =>
                        subscription.id !== action.subId
                    )
            }
        case SUBSCRIBE_TO_DRUG:
            return {
                ...state,
                subscriptions: [
                    ...state.subscriptions,
                    action.subscription
                ]
            }
        case USER:
            return {
                ...state,
                user: action.user
            }
        case USER_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: action.subscriptions
            }
        default:
            return state
    }
};

export default DrugReducer
