import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import cloud from '../assets/images/LightCloud.png'

const Card = styled.div`
  &&{
    ${tw`w-full h-36 py-2`}
    background-color: var(--custom-darkblue-100);
    color:var(--custom-white);
  }
`

const WeatherForcast = () => {
  return (
    <div className="mt-7">
      <Grid container gap={1.5} className='justify-start'>
        <Grid item sm={2} xs={5} minWidth={110} marginTop={1.5} className='bg-slate-400'>
          <Card>
            <div className='text-center'>Tomorrow</div>
            <div>
              <img src={cloud} alt="cloud" className='h-14 m-auto' />
            </div>
            <div className='mt-3 px-2 flex justify-evenly'>
              <span>16°C</span>
              <span style={{ color: 'var(--custom-grey-200)' }}>11°C</span>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default WeatherForcast