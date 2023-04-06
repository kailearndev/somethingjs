import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ForecasResponse, WeatherResponse } from "./weather";

export interface WeatherState {
  location: Location;
  isLoading: boolean;
  city: string | undefined;
  weatherRes: WeatherResponse;
  forecastWeather: ForecasResponse

}
const initialState: WeatherState = {
  weatherRes: {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: [],
    base: "",
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
    },

    clouds: {
      all: 0,
    },
    dt: 0,
    sys: {
      country: "",
      sunrise: 0,
      sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  },
  city: "",
  isLoading: false,
  location: {
    lon: 0,
    lat: 0,
    city: "",
  },
  forecastWeather: {
    city: {
    coord: {
      lon: 0,
      lat: 0
    },
    country: '',
    id: 0,
    name: '',
    population: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0,
  },
  cnt: 0,
  cod: '',
  list : []
  }
};
export interface WeatherCity {
  name: string;
  state: string;
  lon: number;
  locate_names: {
    vi: string;
  };
  lat: number;
  country: string;
}

export interface Location {
  lon: number;
  lat: number;
  city: string | undefined;
}
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeather: (state) => {
      state.isLoading = true;
    },
    fetchWeatherSuccess: (state, action: PayloadAction<WeatherResponse>) => {
      state.weatherRes = action.payload;
    },
    setCityCurrent: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setForecastWeather: (state, action: PayloadAction<ForecasResponse>) => {
      state.forecastWeather = action.payload
    },
  },
});
export const {
  setLocation,
  fetchWeather,
  setCityCurrent,
  fetchWeatherSuccess,
  setForecastWeather,
} = weatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLocationSelector = (state: RootState) => state.weather.location;
export const getCurrentCitySelector = (state: RootState) => state.weather.city;
export const getWeatherSelector = (state: RootState) => state.weather.weatherRes;
export const getForecastWeather = (state: RootState) => state.weather.forecastWeather;

export default weatherSlice.reducer;
