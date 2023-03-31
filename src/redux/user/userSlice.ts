import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserState {
  accessToken: any;
  displayName: string | null;
  email: string | null;
  uid: string | null;
  metaData: {
    createdAt: string | null | undefined;
    creationTime: string | null | undefined;
    lastLoginAt: string | null | undefined;
    lastSignInTime: string | null | undefined;
  };
  isLogged: boolean
}
const initialState: UserState = {
  isLogged: false,
  accessToken: '',
  displayName: "",
  email: "",
  uid: "",
  metaData: {
    createdAt: "",
    creationTime: "",
    lastLoginAt: "",
    lastSignInTime: "",
  },
};
export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
       return {...state, ...action.payload}
    },
  },
});
export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUserSelector = (state: RootState) => state.user;

export default userSlice.reducer;
