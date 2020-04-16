import {FIND_DRUG_DATA, FIND_DRUG_COMMENTS, CREATE_DRUG_COMMENT} from "../actions/DrugActions";

const initialState = {
    drugInfo: [],
    comments: []
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
        default:
            return state
    }
};

export default DrugReducer
