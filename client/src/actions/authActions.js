import axios from 'axios';

// Register User
export const registerUser = (userData, history) => {
    axios.post('/api/users/register', userData).then((res) => history.push('/login'));
};

// Login - get user token
export const loginUser = (userData) => {
    return axios.post('/api/users/login', userData);
};
