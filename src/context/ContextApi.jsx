import locations from '../utils/locations.json'

import React, { useState, createContext, useEffect } from "react";

export const ContextApi = createContext();

const ContextApiProvider = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    setLocationList(locations)
  }, [])

  return (
    <ContextApi.Provider value={{ drawerState, setDrawerState, locationList, setLocationList }} >
      {props.children}
    </ContextApi.Provider>
  )

}

export default ContextApiProvider