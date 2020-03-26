import {FIND_DRUGS_BY_NAME, FIND_DRUGS_BY_DISEASE, GET_DRUG_SIDE_EFFECTS} from "../actions/MainActions";

const initialState = {
    searchResults: []
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_DRUGS_BY_NAME:
            return {
                ...state,
                searchResults: action.drugs
            };
        case FIND_DRUGS_BY_DISEASE:
            return {
                ...state,
                searchResults: action.drugs
            };
        case GET_DRUG_SIDE_EFFECTS:
            return {
                ...state,
                searchResults: action.sideEffects
            };
        default:
            return state
    }
};

export default MainReducer
