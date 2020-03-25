import {FIND_DRUG_DATA} from "../actions/DrugActions";

const initialState = {
    drugInfo: []
};

const DrugReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_DRUG_DATA:
            return {
                ...state,
                drugInfo: action.drugInfo
            };
        default:
            return state
    }
};

export default DrugReducer
