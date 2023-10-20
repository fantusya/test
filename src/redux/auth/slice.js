import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signUp,
  logIn,
  logOut,
  refreshUser,
  confirmEmail,
  changePassword,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, state => {
        state.isRefreshing = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(confirmEmail.fulfilled, state => {
        state.isRefreshing = false;
      })
      .addCase(changePassword.fulfilled, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(
          signUp.pending,
          logIn.pending,
          logOut.pending,
          refreshUser.pending
          // confirmEmail.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          logOut.rejected,
          refreshUser.rejected,
          confirmEmail.rejected,
          changePassword.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
