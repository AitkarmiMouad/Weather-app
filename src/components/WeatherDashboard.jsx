import { Container, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import TodaysHightlights from './TodaysHightlights'
import WeatherForcast from './WeatherForcast'
import { ContextApi } from '../context/ContextApi'

const ContainerCustom = styled(Container)`
  &&{
    background-color: var(--custom-darkblue-200);
    padding-top: 10px;
    ${tw`px-16`}
  }
  `

const CircleButton = styled(IconButton)`
  &&{
    font-size: large;
    font-weight: 700;
    color: var(--custom-darkblue-100);
    background-color: var(--custom-white);
    width: 36px;
    height: 36px;
    ${tw`mx-1`}
    :hover{
      background-color: var(--custom-white);
    }
  }

  `

const Header = styled.div`
    ${tw`flex justify-end mt-3`}
  `
const Footer = styled.div`
  &{
    ${tw`w-full mt-10 mb-5 text-sm text-center`}
    color: var(--custom-grey-200)
  }
`
const secondaryCircleButton = {
  color: ' var(--custom-white)',
  backgroundColor: 'var(--custom-grey-300)',
  border: '2px solid var(--custom-grey-300)',
}

const WeatherDashboard = () => {

  const { isCelsius, setIsCelcius } = useContext(ContextApi)

  return (
    <ContainerCustom className="h-full">
      <Header>
        <CircleButton style={!isCelsius ? secondaryCircleButton : null} onClick={() => setIsCelcius(true)}>°C</CircleButton>
        <CircleButton style={isCelsius ? secondaryCircleButton : null} onClick={() => setIsCelcius(false)}>°F</CircleButton>
      </Header>

      <WeatherForcast />

      <Typography variant='h5' style={{ color: 'var(--custom-white)', marginTop: 45 }}>Today’s Hightlights</Typography>

      <TodaysHightlights />

      <Footer>created by <a href='https://github.com/AitkarmiMouad' target='_blank' rel="noreferrer" className='font-bold underline'>AitkarmiMouad</a> - devChallenges.io</Footer>

    </ContainerCustom>
  )
}

export default WeatherDashboard