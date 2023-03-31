import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface LoginState {
    token: string
    isLogged?: boolean
}
const initialState: LoginState = {
  token: "",
  isLogged: false,
  
}; 
export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    getLogin: (state, action: PayloadAction<LoginState>) => {
      state.isLogged = true;
      state.token = action.payload.token;
    },
    
  },
});
export const { getLogin } = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLoginSelector = (state: RootState) => state.login;


export default loginSlice.reducer;