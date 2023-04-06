import { AxiosResponse } from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { locationWeather, weatherGet } from "./getWeather";
import { ForecasResponse, WeatherResponse } from "./weather";
import {
  fetchWeatherSuccess,
  getCurrentCitySelector,
  getLocationSelector,
  Location,
  setForecastWeather,
  setLocation,
} from "./weatherSlice";
function* fecthWeather() {
  try {
    const currentCity: string = yield select(getCurrentCitySelector);
    const response: AxiosResponse<WeatherResponse> = yield call(
      weatherGet,
      currentCity
    );
    if (response) {
      yield put(fetchWeatherSuccess(response.data));
      yield put(
        setLocation({
          lon: response.data.coord.lon,
          lat: response.data.coord.lat,
          city: currentCity,
        })
      );   
      const responseForce: AxiosResponse<ForecasResponse> = yield call(
        locationWeather,
        response.data.coord.lon,
        response.data.coord.lat);
      yield put(setForecastWeather(responseForce.data));
    }

  } catch (error: any) {}
}
export default function* weatherSaga() {
  // yield takeEvery("weather", fecthWeather);
  yield takeEvery("weather/fetchWeather", fecthWeather);
}
