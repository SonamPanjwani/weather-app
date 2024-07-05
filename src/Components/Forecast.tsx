//import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from "../helperFunctions";
import { forecastType } from "../types";
import Degree from "./Degree";
import Sunrise from "./icons/Sunrise";
import Sunset from "./icons/Sunset";

import Tile from "./Tile";
import TimeAmPm from "./TimeAmPm";

type Props = {
  data: forecastType;
};

const Forecast = ({ data }: Props) => {
  //const navigate = useNavigate();
  const today = data.list[0];
  // const handleSearchclick = () => {
  //   navigate("/");
  // };
  console.log(today);
  return (
    <>
      <div className="flex justify-center p-4">
        <div
          className=" flex flex-col  bg-white bg-opacity-20 
           w-1/3  gap-3
           backdrop:blur-lg drop-shadow-lg rounded-md
            items-center"
        >
          <div className="w-full ">
            <Link
              to="/"
              className="text-left bg-slate-600 text-black rounded-md pl-2 pr-2 inline-block"
            >
              Go To Search
            </Link>
            <section className="text-center">
              <h1 className="text-xl">
                <strong>{data.name}</strong>
              </h1>
              <h4 className="text-base">{data.country}</h4>
              <h1 className="text-base">
                <Degree temp={Math.round(today.main.temp)} />
              </h1>
              <p className="text-sm">
                {today.weather[0].main} {today.weather[0].description}
              </p>
              <p className="text-sm">
                <strong>High </strong>
                <Degree temp={Math.ceil(today.main.temp_max)} />
                <strong> Low </strong>
                <Degree temp={Math.floor(today.main.temp_min)} />
              </p>
            </section>
          </div>

          <section className="flex overflow-x-scroll m-2 pb-2 mb-2 gap-2 w-full">
            {data.list.map((item, i) => {
              return (
                <div
                  key={i}
                  className="inline-block text-center w-[50px] flex-shrink-0"
                >
                  <p className="text-xs">
                    <TimeAmPm time={item.dt} index={i} />
                  </p>
                  <img
                    alt={`weather-icon-${item.weather[0].description}`}
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  ></img>
                  <p className="text-xs font-bold">
                    <Degree temp={Math.round(item.main.temp)} />
                  </p>
                </div>
              );
            })}
          </section>
          <section className="text-zinc-800 w-full text-center">
            <div className="flex justify-between gap-2 text-wrap text-sm mr-2 ml-2">
              <div
                className="w-[150px] h-[90px] text-xs font-bold flex flex-col
            items-center bg-white/20 backdrop:blur-lg rounded 
            drop-shadow-lg p-2 mb-1"
              >
                <Sunrise />
                <span className="mt-3"> {getSunTime(data.sunrise)}</span>
                <p> Sunrise </p>
              </div>
              <div
                className="w-[150px] h-[90px] text-xs font-bold flex flex-col
            items-center bg-white/20 backdrop:blur-lg rounded 
            drop-shadow-lg p-2 mb-1"
              >
                <Sunset />
                <span className="mt-3"> {getSunTime(data.sunset)}</span>
                <p> Sunset </p>
              </div>
            </div>
            <div className="flex justify-between gap-2  text-wrap text-sm mr-2 ml-2 p-1">
              {/* wind direction */}
              <Tile
                icon="wind"
                title="wind"
                info={`${Math.round(today.wind.speed)} km/h`}
                description={`${getWindDirection(
                  Math.round(today.wind.deg)
                )} , gusts ${today.wind.gust.toFixed(1)} km/h`}
              />
              {/* {Feels like} */}
              <Tile
                icon="Feel"
                title="Feels Like"
                info={<Degree temp={Math.round(today.main.temp)} />}
                description={`Feels ${
                  Math.round(today.main.feels_like) <
                  Math.round(today.main.temp)
                    ? "Colder"
                    : "Warmer"
                }`}
              />
            </div>
            <div className=" flex justify-between gap-2 text-wrap text-center mr-2 ml-2 p-1">
              {/* Humidity */}
              <Tile
                icon="humidity"
                title="Humidity"
                info={`${today.main.humidity}`}
                description={getHumidityValue(today.main.humidity)}
              />

              {/* pop  */}
              <Tile
                icon="pop"
                title="Precipitation"
                info={`${Math.round(today.pop)}%`}
                description={`${getPop(today.pop)} , Clouds at ${
                  today.clouds.all
                }`}
              />
            </div>
            <div className="flex justify-between gap-2 text-wrap text-sm mr-2 ml-2 p-1">
              {/* Visibility */}
              <Tile
                icon="visibility"
                title="Visibility"
                info={`${(today.visibility / 1000).toFixed()} km`}
                description={getVisibilityValue(today.visibility)}
              />
              {/*Pressure */}
              <Tile
                icon="Pressure"
                title="Pressure"
                info={`${today.main.pressure} hPa`}
                description={`${
                  Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
                } than Standard`}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Forecast;
