import { useState, ChangeEvent, useEffect } from "react";
import { optionType, forecastType } from "../types/index";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  const getSearchOption = async (value: string) => {
    try {
      const response =
        await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=dc6f3c0fbed05f68941b407805ff134d
    `);
      const data = await response.json();
      console.log(data);
      setOptions(data);
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(options);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    // console.log(term);
    if (value === "") return;
    getSearchOption(value);
  };
  const getForecast = async (city: optionType) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=dc6f3c0fbed05f68941b407805ff134d`
      );
      const data = await response.json();
      console.log(data);
      const forecastData = { ...data.city, list: data.list.slice(0, 16) };
      setForecast(forecastData);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };
  const onOptionSelect = (option: optionType) => {
    console.log(option.name);
    setCity(option);
  };
  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};
export default useForecast;
