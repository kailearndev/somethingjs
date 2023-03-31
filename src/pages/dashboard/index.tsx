import { onAuthStateChanged } from "@firebase/auth";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Search } from "react-feather";
import { useDispatch } from "react-redux";
import { auth } from "../../auth/firebase";
import Echart from "../../components/Echart";
import useDebounce from "../../hooks/useDebounce";
// import Input from "../../components/Input";
import { optDashboardFake, optHomeChart } from "../../ultils/fakeData";
import Weather from "./weather";
import { getWeather } from "./weatherSlice";

const Dashboard = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const cityInput = useDebounce(city)
  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  };
  const handleSearch = () => {
    const url = 'http://api.weatherstack.com/current?access_key=21c2aa64ef27cd3dd1707b2378781eb5'
    axios.post(url, null,{
      params: {
        query : cityInput
      },
      
    }).then((item) => {
      dispatch(getWeather(item.data))
    })
  }
  
  return (
    <>
      <div className=" flex border rounded-lg border-1 mt-5 p-3">
        <div className="basis-1/3">
          <Weather />
        </div>
        <div className="basis-2/3 border rounded-lg flex justify-center">
          {/* <Weather /> */}

          <div className="flex mt-14">
            <Input label="Input With Icon" onChange={handleChangeCity} />
            <Button className="h-10 w-full ml-1" onClick={handleSearch}>
              
              search
            </Button>
          </div>
        </div>
      </div>
      <div className="flex border rounded-lg border-1 mt-5 p-3">
        <div className="basis-full">
          <h2 className="font-bold">Customer</h2>
          <Echart
            style={{
              height: "400px",
            }}
            option={optHomeChart}
          />
        </div>
      </div>
      <div className="border rounded-lg border-1 mt-5 p-3">
        <Echart
          style={{
            height: "400px",
          }}
          option={optDashboardFake}
        />
      </div>
    </>
  );
};

export default Dashboard;
