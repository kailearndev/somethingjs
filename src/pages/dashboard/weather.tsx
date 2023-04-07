import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getCurrentCitySelector,
  getLocationSelector,
  getWeatherSelector,
} from "../../redux/weather/weatherSlice";
import sunny from "../../assets/sunny.png";
import { Cloud, Sun } from "react-feather";
import { temp } from "../../ultils";
import { Box, Divider, Grid } from "@mui/material";
const Weather = () => {
  const location = useSelector(getWeatherSelector);
  const currentCity = useSelector(getCurrentCitySelector);
  const tempCurrent = temp(location.main.temp);
  const animationStyle = {
    animation: "myAnimation 2s ease-in-out infinite",
  };
  return (
    
        <Grid container spacing={2} display="flex" justifyContent={"center"} minHeight='60%' p={2}>
          <Grid item md={3}>
            <Tooltip content={currentCity}>
              <Typography variant="h4" className="text-sm mt-5 mr-5 truncate">
                {currentCity}
              </Typography>
            </Tooltip>
          </Grid>
          <Box
            sx={{
              borderLeft: 1,
              borderColor: "orangered",
            }}
          />
          <Grid item md={4}>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Box display={"flex"} alignItems="center">
                  <Tooltip content={tempCurrent}>{tempCurrent ?? "-"}</Tooltip>
                  <p style={{ marginLeft: "0.5rem" }}> Độ C </p>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  {Number(tempCurrent) > 30 ? (
                    <Sun style={animationStyle} color="orange" />
                  ) : (
                    <Cloud className="animate-bounce" />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Box
            sx={{
              borderLeft: 1,
              borderColor: "green",
            }}
          />
          <Grid item md={4}>
            <h3 className="truncate">/Tình trạng Mây/</h3>
            <p >
              {location?.weather[0]?.description}
            </p>
          </Grid>
        </Grid>
    
  );
};

export default Weather;
