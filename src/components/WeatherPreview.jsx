import { Button, Container, IconButton } from '@mui/material'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"
import cloud from '../assets/images/Cloud-background.png'
import FmdGoodIcon from '@mui/icons-material/FmdGood';

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
    background-color: var(--custom-gray-200);
    color: var(--custom-white);
    text-transform: none;
    height: 35px;
  }
  `

const MyLocationIconC = styled(MyLocationIcon)`
  &&{
    background-color: var(--custom-gray-200);
    border-radius: 50%;
    padding: 4px;
    color: var(--custom-white);
  }
  `
const cloudImgStyle = {
  width: '115%',
  marginTop: 30,
  placeSelf: 'center',
}

const TemperatureDegree = styled.p`
  font-weight: 500;
  font-size: 120px;
  color: var(--custom-white);
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;

  & span{
  color: var(--custom-gray-100);
  font-size: 80px;

  }
`

const TemperatureState = styled.p`
  color: var(--custom-gray-100);
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
    color: var(--custom-gray-100);
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
    color: var(--custom-gray-100) ;
  }
`

const WeatherPreview = () => {

  return (
    <ContainerCustom style={{ padding: 0, height: '100%' }}>
      <ContainerCustom>
        <Header>
          <ButtonCustom size='small' >Search for places</ButtonCustom>
          <IconButton aria-label="location"  >
            <MyLocationIconC />
          </IconButton>
        </Header>
      </ContainerCustom>
      <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', }}>
        <img src={cloud} alt="cloud" style={cloudImgStyle} />
        { }
      </div>
      <TemperatureDegree>15<span>°C</span></TemperatureDegree>
      <TemperatureState>Shower</TemperatureState>
      <Date><span>Today</span><span>•</span><span>Fri-5-Jun</span></Date>
      <City style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <FmdGoodIcon />
        <span>City</span>
      </City>
    </ContainerCustom>
  )
}

export default WeatherPreview