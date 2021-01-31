import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppContext } from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [state] = useAppContext();

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                state.isAuthenticated ? <Component {...routeProps} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;
