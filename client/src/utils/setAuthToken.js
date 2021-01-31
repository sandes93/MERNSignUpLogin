import axios from 'axios';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from '../actions/types';

export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('userToken', token);
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth header
        localStorage.removeItem('userToken');
        delete axios.defaults.headers.common['Authorization'];
    }
};


export const useLoginCheck = (dispatch) => {
    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            const decodedToken = jwt_decode
            (token);
            dispatch({ type: SET_CURRENT_USER, payload: decodedToken });
        }
    }, [dispatch]);
};

export const logout = (dispatch) => {
    setAuthToken(false)
    dispatch({ type: SET_CURRENT_USER, payload: {} });
};
