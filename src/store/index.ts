import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import loginReducer  from "../redux/login/loginSlice"
import rootSaga from "../redux/saga/rootSaga";
import userReducer  from "../redux/user/userSlice"
import weatherReducer  from "../redux/weather/weatherSlice"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
  
});
sagaMiddleware.run(rootSaga);
// const action = (type:any) => store.dispatch({ type });


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
