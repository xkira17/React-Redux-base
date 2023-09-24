import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsers(state, action) {
      state.users = action.payload;
    },
    deletUser(state, action) {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { fetchUsers, deletUser } = userSlice.actions;
