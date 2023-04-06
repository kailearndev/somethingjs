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
const Weather = () => {
  const location = useSelector(getWeatherSelector);
  const currentCity = useSelector(getCurrentCitySelector);
  const tempCurrent = temp(location.main.temp)
  return (
    <Card className="border flex justify-center w-[100%] hover:shadow-gray-400 hover:translate-x-1">
      <CardBody>
        <div className="flex justify-center ">
          <Tooltip content={currentCity} >
            <Typography
              variant="h6"
              className="text-sm mt-5 mr-5 truncate"
            >
              {currentCity}
            </Typography>
          </Tooltip>
          <div className="border-l-2 border-red-200 p-2 "></div>
          <div className="text-2xl text-left ">
            <Tooltip content={tempCurrent} className=" truncate">
              {tempCurrent ?? '-'}
            </Tooltip>
            <p className="text-lg text-right  truncate"> Độ C </p>
          </div>
          <div>
            {Number(tempCurrent) > 30 ? (
              <Sun className="animate-spin" color="orange" />
            ) : (
              <Cloud className="animate-bounce" />
            )}
          </div>
          <div className="border-l-2 border-yellow-600 ml-2"></div>
          <div className="ml-4 mt-2 text-center ">
            <h3 className="truncate">/Tình trạng Mây/</h3>
            <p className="font-serif text-orange-900 capitalize truncate">
              {location?.weather[0]?.description}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Weather;
