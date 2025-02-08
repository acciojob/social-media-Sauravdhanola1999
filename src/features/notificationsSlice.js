import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
