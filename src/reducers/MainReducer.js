import {FIND_DRUGS_BY_NAME, FIND_DRUGS_BY_DISEASE, GET_DRUG_SIDE_EFFECTS} from "../actions/MainActions";

const initialState = {
    searchResults: [],
    findByName: false,
    findByDisease: false,
    findSideEffects: false
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_DRUGS_BY_NAME:
            return {
                ...state,
                searchResults: action.drugs,
                findByName: true,
                findByDisease: false,
                findSideEffects: false
            };
        case FIND_DRUGS_BY_DISEASE:
            return {
                ...state,
                searchResults: action.drugs,
                findByName: false,
                findByDisease: true,
                findSideEffects: false
            };
        case GET_DRUG_SIDE_EFFECTS:
            return {
                ...state,
                searchResults: action.sideEffects,
                findByName: false,
                findByDisease: false,
                findSideEffects: true
            };
        default:
            return state
    }
};

export default MainReducer
