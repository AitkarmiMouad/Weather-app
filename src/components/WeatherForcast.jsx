import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import getImages from '../utils/getImage';
import { ContextApi } from "../context/ContextApi";
import moment from 'moment';


const Card = styled.div`
  &&{
    ${tw`w-full h-36 py-2`}
    background-color: var(--custom-darkblue-100);
    color:var(--custom-white);
  }
`

const WeatherForcast = () => {

  const { weatherLoading, weatherData, weatherFetchError, isCelsius, convertTemp } = useContext(ContextApi);
  
  return (
    <div className="mt-7">
      <Grid container gap={1.5} className='justify-start'>
        {!weatherLoading && !weatherFetchError && weatherData.consolidated_weather.slice(1).map((element, index) => (
          <Grid item sm={2} xs={5} minWidth={110} marginTop={1.5} className='bg-slate-400'>
            <Card>
              <div className='text-center'>{(element.applicable_date===moment().add(1,'days').format('yyyy-MM-DD'))? 'Tomorrow' : element.applicable_date}</div>
              <div>
                <img src={getImages(element.weather_state_abbr)} alt="cloud" className='h-14 m-auto' />
              </div>
              <div className='mt-3 px-2 flex justify-evenly'>
                <span>{parseInt(convertTemp(element.max_temp))}{isCelsius ? '°C' : '°F'}</span>
                <span style={{ color: 'var(--custom-grey-200)' }}>{parseInt(convertTemp(element.min_temp))}{isCelsius ? '°C' : '°F'}</span>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default WeatherForcast