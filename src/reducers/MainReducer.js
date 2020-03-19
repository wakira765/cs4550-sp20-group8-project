import {FIND_DRUGS_BY_NAME, FIND_DRUGS_BY_DISEASE, GET_DRUG_SIDE_EFFECTS} from "../actions/MainActions";

const initialState = {
    drugs: []
};

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_DRUGS_BY_NAME:
            return {
                ...state,
                drugs: action.drugs
            };
        case FIND_DRUGS_BY_DISEASE:
            return {
                ...state,
                drugs: action.drugs
            };
        case GET_DRUG_SIDE_EFFECTS:
            return {
                ...state,
                side_effects: action.side_effects
            };
        default:
            return state
    }
};

export default MainReducer