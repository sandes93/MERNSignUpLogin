import React from 'react';
import Landing from './components/pages/Landing/Landing';
import { useAppContext } from './store';

function Auth(ComposedComponent) {
    const [ state ] = useAppContext();

    return function Authentication(props) {
        return state.isAuthenticated
            ? <ComposedComponent {...props} />
            : <Landing />;
    };
}

export default Auth;
