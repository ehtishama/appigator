import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (_, action) => ({isLoggedIn: true, user: action.payload}),
    logout: () => initialState,
  },
});

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;
