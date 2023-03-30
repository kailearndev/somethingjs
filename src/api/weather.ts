import instance from "./axiosConfig"

export const WeatherApi = () => {
    const weatherPost = instance.post("/", {
      lat: "10.24",
      lon: "105.96",
      exclude: "hourly",
      apiid: '9c04c1dcf5348cc0a70fe9e02d44e23c'
    });
}