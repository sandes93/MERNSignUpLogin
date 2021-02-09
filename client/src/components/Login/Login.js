import React, { useState } from 'react';
import { GET_ERRORS } from '../../actions/types';
import { useAppContext } from '../../store';
import { loginUser } from '../../utils/userApis';
import { useHistory } from 'react-router-dom';
import { setUserLoggedIn } from '../../actions';

function Login() {
    const history = useHistory();

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [, appDispatch ] = useAppContext();

    const onChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: formState.email,
            password: formState.password,
        };
        try {
            const response = await loginUser(user);
            // Set token to localStorage
            const token = response.data;
            // Set user to logged in
            await setUserLoggedIn(token, appDispatch);

            history.push('/dashboard');
        } catch (error) {
            appDispatch({
                type: GET_ERRORS,
                payload: error,
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="mx-auto mt-5 col-md-6">
                    <form noValidate onSubmit={handleSubmit}>
                        <h1 className="mb-3 h3 font-weight normal">Please Sign in</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={formState.email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={formState.password}
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
