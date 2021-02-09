import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAppContext } from './store';

function Auth(ComposedComponent) {
    const [ state, dispatch ] = useAppContext();

    return function Authentication(props) {
        return state.isAuthenticated
            ? <ComposedComponent {...props} state={state} dispatch={dispatch} />
            : <Redirect to="/login" />;
    };
}

export default Auth;
