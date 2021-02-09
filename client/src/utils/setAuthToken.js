import axios from 'axios';

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
