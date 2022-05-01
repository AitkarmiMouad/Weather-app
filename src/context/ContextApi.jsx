import locations from '../utils/locations.json'

import React, { useState, createContext, useEffect } from "react";

export const ContextApi = createContext();

const ContextApiProvider = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherFetchError, setWeatherFetchError] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [isCelsius, setIsCelcius] = useState(true)
  const [inputSearch, setInputSearch] = useState();
  const [reset, setReset] = useState(false);


  function convertTemp(temp) {
    if (isCelsius) {
      return temp
    }
    else {
      return (+temp * 9 / 5 + 32).toFixed(2)
    }
  }

  useEffect(() => {
    setLocationList(locations)
  }, [])

  return (
    <ContextApi.Provider
      value={{
        weatherFetchError, setWeatherFetchError, weatherLoading, setWeatherLoading,
        drawerState, setDrawerState, locationList, setLocationList, weatherData, setWeatherData,
        isCelsius, setIsCelcius, convertTemp, reset, setReset,inputSearch, setInputSearch
      }} >
      {props.children}
    </ContextApi.Provider>
  )

}

export default ContextApiProvider