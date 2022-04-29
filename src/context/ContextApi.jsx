import locations from '../utils/locations.json'

import React, { useState, createContext, useEffect } from "react";

export const ContextApi = createContext();

const ContextApiProvider = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherFetchError, setWeatherFetchError] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);


  useEffect(() => {
    setLocationList(locations)
  }, [])

  return (
    <ContextApi.Provider
      value={{
        weatherFetchError, setWeatherFetchError, weatherLoading, setWeatherLoading,
        drawerState, setDrawerState, locationList, setLocationList, weatherData, setWeatherData
      }} >
      {props.children}
    </ContextApi.Provider>
  )

}

export default ContextApiProvider