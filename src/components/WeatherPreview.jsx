import { Button, Container, IconButton } from '@mui/material'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import tw from "twin.macro"
import cloud from '../assets/images/Cloud-background.png'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import Drawer from './Drawer'
import { ContextApi } from "../context/ContextApi";
import useAxiosFetch from "../hooks/useAxiosFetch";
import moment from 'moment';
import getImages from '../utils/getImage';


const ContainerCustom = styled(Container)`
  &&{
    background-color: var(--custom-darkblue-100);
    padding-top: 10px;
  }
  `
const Header = styled.div`
  &&{
    ${tw`flex justify-between items-center`}
  }
  `

const ButtonCustom = styled(Button)`
  &&{
    border-radius: 0;
    background-color: var(--custom-grey-200);
    color: var(--custom-white);
    text-transform: none;
    /* height: 35px; */
  }
  :hover{
    border: 1px solid white;
  }
  `

const MyLocationIconC = styled(MyLocationIcon)`
  &&{
    background-color: var(--custom-grey-200);
    border-radius: 50%;
    padding: 6px;
    border: 1px solid transparent;
    color: var(--custom-white);
    height: 36px;
    width: 36px;
  }
  :hover{
    border: 1px solid white;
    background-color: var(--custom-darkblue-100);

  }
  `
const cloudImgStyle = {
  width: '115%',
  marginTop: 30,
  placeSelf: 'center',
  position: 'absolute',
}
const cloudStateStyle = {
  marginTop: 30,
}

const TemperatureDegree = styled.p`
  font-weight: 500;
  font-size: 120px;
  color: var(--custom-white);
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;

  & span{
  color: var(--custom-grey-100);
  font-size: 80px;

  }
`

const TemperatureState = styled.p`
  color: var(--custom-grey-100);
  font-size: 30px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
`

const Date = styled.p`
  display: flex;
  justify-content: space-around;
  margin:auto;
  width: 150px;

  & span{
    color: var(--custom-grey-100);
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    text-align: center;
  }
`

const City = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  & *{
    color: var(--custom-grey-100) ;
  }
`


const WeatherPreview = () => {

  const { data, fetchError, isLoading } = useAxiosFetch();
  const { drawerState, setDrawerState, weatherLoading, weatherData, weatherFetchError,
    setWeatherFetchError, setWeatherLoading, setWeatherData, isCelsius, convertTemp
  } = useContext(ContextApi);

  useEffect(() => {
    setWeatherData(data)
    setWeatherFetchError(fetchError)
    setWeatherLoading(isLoading)
  }, [data, setWeatherData, setWeatherFetchError, setWeatherLoading, fetchError, isLoading])

  return (
    <ContainerCustom id="drawer-container" style={{ padding: 0, height: '100%', position: 'relative' }}>
      <Drawer />
      <ContainerCustom>
        <Header>
          <ButtonCustom size='medium' onClick={() => { setDrawerState(!drawerState) }} >Search for places</ButtonCustom>
          <IconButton aria-label="location" >
            <MyLocationIconC />
          </IconButton>
        </Header>
      </ContainerCustom>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: 5 }}>
        <img src={cloud} alt="cloud" style={cloudImgStyle} className='opacity-25' />
        {!weatherFetchError && !weatherLoading && (<img src={getImages(weatherData.consolidated_weather[0].weather_state_abbr)} alt="cloud" style={cloudStateStyle} className='w-6/12' />)}
      </div>
      <TemperatureDegree>{!weatherFetchError && !weatherLoading && parseInt(convertTemp(weatherData.consolidated_weather[0].the_temp))}<span>{isCelsius ? '°C' : '°F'}</span></TemperatureDegree>
      <TemperatureState>{!weatherFetchError && !weatherLoading && weatherData.consolidated_weather[0].weather_state_name}</TemperatureState>
      <Date><span>Today</span><span>•</span><span>{!weatherFetchError && !weatherLoading && moment(weatherData.consolidated_weather[0].applicable_date).format('ddd,d MMMM')}</span></Date>
      <City style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
        <FmdGoodIcon />
        <span>{!weatherFetchError && !weatherLoading && weatherData.title}</span>
      </City>
    </ContainerCustom>
  )
}

export default WeatherPreview