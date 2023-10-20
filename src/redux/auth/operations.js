import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = 'https://test-back-rzeu.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/signup', credentials);
      console.log('RES SIGNUP', res.data);
      // After successful registration, add the token to the HTTP header
      // setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      //   console.log('error from SIGNUP', error.response.data.message);
      console.log('error from SIGNUP', error);
      const obj = {
        message: error.response.data.message,
        statusCode: error.response.status,
      };
      return thunkAPI.rejectWithValue(obj);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', credentials);
      console.log('RES LOGIN', res.data);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log('error from LOGIN', error.response.data.message);
      const obj = {
        message: error.response.data.message,
        statusCode: error.response.status,
      };
      return thunkAPI.rejectWithValue(obj);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/api/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    console.log('error from LOGOUT', error.response.data.message);
    const obj = {
      message: error.response.data.message,
      statusCode: error.response.status,
    };
    return thunkAPI.rejectWithValue(obj);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      // If there is no token, exit without performing any request
      //   return;
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/auth/current');
      console.log('RES REFRESH', res.data);
      return res.data;
    } catch (error) {
      console.log('error from REFRESH', error.response.data.message);
      const obj = {
        message: error.response.data.message,
        statusCode: error.response.status,
      };
      return thunkAPI.rejectWithValue(obj);
    }
  }
);

export const confirmEmail = createAsyncThunk(
  'auth/confirmEmail',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/confirmEmail', credentials);
      console.log('RES confirmEmail', res.data);
      // After successful login, add the token to the HTTP header
      return res.data;
    } catch (error) {
      console.log('error from confirmEmail', error.response.data.message);
      const obj = {
        message: error.response.data.message,
        statusCode: error.response.status,
      };
      return thunkAPI.rejectWithValue(obj);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/changePassword', credentials);
      console.log('RES changePassword', res.data);
      // After successful login, add the token to the HTTP header
      return res.data;
    } catch (error) {
      console.log('error from changePassword', error.response.data.message);
      const obj = {
        message: error.response.data.message,
        statusCode: error.response.status,
      };
      return thunkAPI.rejectWithValue(obj);
    }
  }
);
