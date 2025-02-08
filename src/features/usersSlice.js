import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "1", name: "John Doe" }];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
