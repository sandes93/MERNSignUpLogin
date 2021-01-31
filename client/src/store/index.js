import jwt_decode from 'jwt-decode';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { SET_CURRENT_USER } from '../actions/types';
import { appReducer, appInitialState } from './appStore';

const AppContext = createContext([
    appInitialState,
    function dispatch() {},
]);

const { Provider } = AppContext;

export const AppContextProvider = ({ children, ...props }) => {
    const [appState, appDispatch] = useReducer(appInitialState, appReducer);

    return (
        <Provider
            value={[appState, appDispatch]}
            {...props}
        >
            {children}
        </Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export const useLoginCheck = (dispatch) => {
    useEffect(() => {
        const token = localStorage.getItem('usertoken');
        if (token) {
            const decodedToken = jwt_decode(token);
            dispatch({ type: SET_CURRENT_USER, payload: decodedToken });
        }
    }, []);
};
