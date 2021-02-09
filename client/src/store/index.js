import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { SET_CURRENT_USER } from '../actions/types';
import { getUser } from '../utils/userApis';
import { appReducer, appInitialState } from './appStore';

const AppContext = createContext([
    appInitialState,
    function dispatch() {},
]);

const { Provider } = AppContext;

export const AppContextProvider = ({ children, ...props }) => {
    const [appState, appDispatch] = useReducer(appReducer, appInitialState);

    useEffect(() => {
        console.log('Initial User check. Verify token saved');
        getUser().then(res => appDispatch({ type: SET_CURRENT_USER, payload: res.data }))
            .catch(() => appDispatch({ type: SET_CURRENT_USER, payload: {}}))
    }, [])

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
