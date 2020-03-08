import {FIND_DRUGS_BY_NAME} from "../actions/MainActions";

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
        default:
            return state
    }
};

export default MainReducer