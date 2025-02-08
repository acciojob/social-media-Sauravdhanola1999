import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/postsSlice";
import usersReducer from "./features/usersSlice";
import notificationsReducer from "./features/notificationsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
});
