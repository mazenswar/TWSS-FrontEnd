// Constants
import {
    GET_FEMINISTS
} from '../Constants';

// default state
const initialState = [];
    

// reducers
const feministReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEMINISTS:
            return action.feminists;
        default:
            return state;
    }
};

export default feministReducer;