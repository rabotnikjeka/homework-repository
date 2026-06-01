import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.list.push({
        id: Date.now(),
        name: action.payload,
      });
    },
    removeUser(state, action) {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
