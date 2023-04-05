import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  message: '',
  blacklist: ['notifications'],
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.visible = true;
      state.message = action.payload;
    },
    hideNotification: (state, action) => {
      state.visible = false;
    },
  },
  // extraReducers: builder =>
  //   builder.addCase(addContact.type, (state, action) => {
  //     state.visible = true;
  //     state.message = 'The contact was added to your Phonebook';
  //   }),
});

export const { addNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
