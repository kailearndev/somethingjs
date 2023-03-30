import { configureStore } from "@reduxjs/toolkit";
import loginReducer  from "../redux/login/loginSlice"
import userReducer  from "../redux/user/userSlice"
import weatherReducer  from "../pages/dashboard/weatherSlice"

export const store = configureStore({
  reducer: {
  login: loginReducer,
  user: userReducer,
  weather: weatherReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
