import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

// const handleFulfilled = (state, { payload }) => {
//   state.user = payload.user;
//   state.token = payload.token;
//   // state.isLoggedIn = true;
//   // state.isRefreshing = false;
// };

const handleRejected = (state, { payload }) => {
  console.log('PAYLOAD', payload);
  state.isRefreshing = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(signUp.pending, state => state)
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.error = null;
        // state.user = payload.user;
        // state.token = payload.token;
        // state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      // .addCase(signUp.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = { name: payload.name, email: payload.email };
        // state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      // .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.error = null;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      // .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          logOut.rejected,
          refreshUser.rejected
        ),
        handleRejected
      );
    // .addCase(refreshUser.rejected, handleRejected)
  },
  //   extraReducers: {
  //     [register.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [logIn.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [logOut.fulfilled](state) {
  //       state.user = { name: null, email: null };
  //       state.token = null;
  //       state.isLoggedIn = false;
  //     },
  //     [refreshUser.pending](state) {
  //       state.isRefreshing = true;
  //     },
  //     [refreshUser.fulfilled](state, action) {
  //       state.user = action.payload;
  //       state.isLoggedIn = true;
  //       state.isRefreshing = false;
  //     },
  //     [refreshUser.rejected](state) {
  //       state.isRefreshing = false;
  //     },
  //   },
});

export const authReducer = authSlice.reducer;
