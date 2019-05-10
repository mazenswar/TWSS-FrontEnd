import {
    GET_USER,
    CREATE_USER,
    LOGOUT_USER,
    LOGIN_USER,
} from '../Constants';

// default state
const initialState = '';

// reducers
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return action.user;
        case CREATE_USER:
            return action.user;
        case LOGOUT_USER:
            return null;
        case LOGIN_USER:
            return action.user;
        default:
            return state;
    }
};

export default usersReducer;