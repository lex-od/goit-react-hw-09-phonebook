import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authOps } from './';

const { register, logIn, logOut, getCurrentUser } = authOps;

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
    [register.fulfilled]: (_, { payload }) => payload.user,
    [logIn.fulfilled]: (_, { payload }) => payload.user,
    [logOut.fulfilled]: () => initUserState,
    [getCurrentUser.fulfilled]: (_, { payload }) => payload,
});

const isAuth = createReducer(false, {
    [register.fulfilled]: () => true,
    // [register.rejected]: () => false,

    [logIn.fulfilled]: () => true,
    // [logIn.rejected]: () => false,

    [logOut.fulfilled]: () => false,

    [getCurrentUser.fulfilled]: () => true,
    // [getCurrentUser.rejected]: () => false,
});

const token = createReducer(null, {
    [register.fulfilled]: (_, { payload }) => payload.token,
    [logIn.fulfilled]: (_, { payload }) => payload.token,
    [logOut.fulfilled]: () => null,
});

const error = createReducer(null, {
    [register.pending]: () => null,
    [register.rejected]: (_, { error }) => error,

    [logIn.pending]: () => null,
    [logIn.rejected]: (_, { error }) => error,

    [logOut.pending]: () => null,
    [logOut.rejected]: (_, { error }) => error,

    [getCurrentUser.rejected]: (_, { error }) => error,
});

export default combineReducers({
    user,
    isAuth,
    token,
    error,
});
