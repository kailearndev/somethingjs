import axios from "axios";

const instance = axios.create({
    method: '',
  baseURL:
    "https://api.openweathermap.org/data/3.0/onecall",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance