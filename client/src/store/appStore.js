import { isEmpty } from 'lodash';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from '../actions/types';

export const appInitialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {}
};

export function appReducer(state, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
