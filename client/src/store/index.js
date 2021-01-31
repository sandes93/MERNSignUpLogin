import React, { createContext, useContext, useReducer } from 'react';
import { appReducer, appInitialState } from './appStore';

const AppContext = createContext([
    appInitialState,
    function dispatch() {},
]);

const { Provider } = AppContext;

export const AppContextProvider = ({ children, ...props }) => {
    const [appState, appDispatch] = useReducer(appReducer, appInitialState);

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
