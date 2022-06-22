import {createSlice} from '@reduxjs/toolkit';

const initialState = null;

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (_, action) => action.payload,
  },
});

export default settingsSlice.reducer;
export const {setSettings} = settingsSlice.actions;
