import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface WeatherState {
    weather: []
}
const initialState: WeatherState = {
  weather: []
  
}; 
export const weatherSlice = createSlice({
  name: "weatherReducer",
  initialState,
  reducers: {
    getWeather: (state, action: PayloadAction<WeatherState>) => {
       [...state.weather, action.payload]
    },
    
  },
});
export const { getWeather } = weatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getWeatherSelector = (state: RootState) => state.login;


export default weatherSlice.reducer;