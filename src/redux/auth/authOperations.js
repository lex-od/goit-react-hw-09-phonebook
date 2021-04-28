import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async credentials => {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);

    return data;
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);

    return data;
});

const logOut = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout');

    token.unset();
});

const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async () => (await axios.get('/users/current')).data,
    {
        condition: (_, { getState }) => {
            const persistedToken = getState().auth.token;

            if (!persistedToken) return false;

            token.set(persistedToken);
        },
    },
);

const authOperations = { register, logIn, logOut, getCurrentUser };
export default authOperations;
