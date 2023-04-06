import axios from "axios";
import { useSelector } from "react-redux";
import { urlGetHistoryWeather, urlGetLonLat, urlGetWeather } from "../../api/url";

export const weatherGet = async (city: string | undefined) => {
  const res = await axios
    .get(urlGetWeather, {
      params: {
        q: city,
        limit: 1,
        appid: "9c04c1dcf5348cc0a70fe9e02d44e23c",
        lang: 'vi'
      },
    })
    .then((res) => res);
  return res;
};
export const locationWeather = async (lon: number, lat: number) => {
  const res = await axios
    .get(urlGetHistoryWeather, {
      params: {
        lon: lon,
        lat: lat,
        appid: "9c04c1dcf5348cc0a70fe9e02d44e23c",
        lang: "vi",
      },
    })
    .then((res) => res);
  return res;
};
