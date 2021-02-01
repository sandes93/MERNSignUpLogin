import React, { Component, useState } from "react";
import { loginUser } from '../UserFunctions/userFunctions';
import { useHistory } from 'react-router-dom'

function Login() {

    const history = useHistory();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value });
    }

    const onSubmit= (e) =>  {
        e.preventDefault();
        const user = {
            email: state.email,
            password: state.password
        }
        loginUser(user).then(res => {
            if(res) {
               history.push('/dashboard');
            }
            else {
                console.log("Incorrect email or password");
            }
        })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={ onSubmit }>
                        <h1 className='h3 mb-3 font-weight normal'>Please Sign in</h1>
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email'
                            className='form-control'
                            name='email'
                            placeholder='Enter Email'
                            value={ state.email }
                            onChange={ onChange }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password'
                            className='form-control'
                            name='password'
                            placeholder='Enter Password'
                            value={ state.password }
                            onChange={ onChange }
                            />
                        </div>
                        <button type='submit' className='btn btn-lg btn-primary btn-block'>
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
