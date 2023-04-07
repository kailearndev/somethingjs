import { Option } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Echart from "../../components/Echart";
import { useProvine } from "../../hooks/useProvinde";
import MapComponent from "./map";
// import Input from "../../components/Input";
import {
  fetchWeather,
  getForecastWeather,
  getLocationSelector,
  setCityCurrent,
} from "../../redux/weather/weatherSlice";
import { optDashboardFake, optHomeChart } from "../../ultils/fakeData";
import Weather from "./weather";
import { temp } from "../../ultils";
import { List } from "../../redux/weather/weather";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
const Dashboard = () => {
  const foreCastWeather = useSelector(getForecastWeather);
  // console.log(force.list.slice(0,5).map((item: List) => temp(item.main.temp)));
  const colors = ["#5470C6", "#EE6666"];

  const weatherFake = {
    color: colors,
    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {},
    grid: {
      top: 90,
      bottom: 50,
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[1],
          },
        },
        axisPointer: {
          label: {
            formatter: function (params: any) {
              return (
                "Nhiệt độ  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            },
          },
        },
        // prettier-ignore
        data: foreCastWeather.list.slice(0,5).map((item) => item.dt_txt.replace(/^[^ ]* /, "")),
      },
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: true,
          lineStyle: {
            color: colors[0],
          },
        },
        axisPointer: {
          label: {
            formatter: function (params: any) {
              return (
                "Nhiệt độ  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            },
          },
        },
        // prettier-ignore
        data:  foreCastWeather.list.slice(8,13).map((item) => item.dt_txt.replace(/^[^ ]* /, "")),
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Hôm nay",
        type: "line",
        xAxisIndex: 1,
        smooth: true,
        emphasis: {
          focus: "series",
        },
        data: foreCastWeather.list
          .slice(0, 5)
          .map((item) => temp(item.main.temp)),
      },
      {
        name: "Ngày Mai",
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series",
        },
        data: foreCastWeather.list
          .slice(8, 13)
          .map((item) => temp(item.main.temp)),
      },
    ],
  };
  const dispatch = useDispatch();
  const provinde = useProvine();
  const location = useSelector(getLocationSelector);
  const handleChangeCity = (event: SelectChangeEvent) => {
    const regex = /(Tỉnh|Thành phố)\s*(.*)/i;
    const match = event?.target.value.match(regex);
    const cityName = match ? match[2] : "";
    // setCity(cityName);
    dispatch(setCityCurrent(cityName));
    dispatch(fetchWeather());
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", p: 3 }}
      >
        <Grid item xs={4} md={2}>
          <Box>
            <InputLabel
              sx={{
                marginBottom: 2,
              }}
            >
              Tỉnh/Thành Phố
            </InputLabel>
            <Select
              autoWidth
              placeholder="Tỉnh/Thành Phố"
              onChange={handleChangeCity}
              sx={{
                width: 160,
              }}
            >
              {provinde?.map((ite) => (
                <MenuItem value={ite.name} key={ite.code}>
                  {ite.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              minHeight: "55%",
            }}
          >
            <Weather />
          </Paper>
        </Grid>
        <Grid item md={5}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Echart option={weatherFake} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
