import { Grid, LinearProgress, linearProgressClasses, Stack } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import NearMeIcon from '@mui/icons-material/NearMe';

const Card = styled.div`
  &&{
    ${tw`w-full h-full p-3.5`}
    background-color: var(--custom-darkblue-100);
    color:var(--custom-white);
  }
`

const Stats = styled.p`
  font-weight: 700;
  font-size: 60px;
  color: var(--custom-white);
  ${tw`mb-2.5 p-0`}
  text-align: center;

  & span{
  color: var(--custom-grey-100);
  font-size: 30px;

  }
`

const BorderLinearProgress = styled(LinearProgress)`
  &&{
    height: 6px;
    border-radius: 5px;
    .${linearProgressClasses.bar}{
      background-color:#FFEC65;
      border-radius: 5px;
    }
  }
  &.${linearProgressClasses.colorPrimary}{
    background-color:#E7E7EB;
  }
  `

const ProgressLabel = styled.div`
    &&{
      color: var(--custom-white);
      font-weight: 500;
      font-size: 12px;
    }
  `

const TodaysHightlights = () => {
  return (
    <div className="mt-6">
      <Grid container gap={3} className='justify-evenly'>
        <Grid item sm={4} xs={12} minWidth={280} className='bg-slate-400'>
          <Card>
            <div className='text-center'>Wind status</div>
            <Stats>7<span>mph</span></Stats>
            <div className='flex justify-center mt-4'>
              <Stack direction="row" alignItems="center" gap={1}>
                <NearMeIcon />
                <span className='text-sm'>WSW</span>
              </Stack>
            </div>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12} minWidth={280} className='bg-slate-400'>
          <Card>
            <div className='text-center'>Humidity</div>
            <Stats>84<span>%</span></Stats>
            <div className='px-7 '>
              <div className='flex justify-between w-full'>
                <ProgressLabel>0</ProgressLabel><ProgressLabel>50</ProgressLabel><ProgressLabel>100</ProgressLabel>
              </div>
              <BorderLinearProgress variant="determinate" value={50} />
              <div className='flex justify-end w-full'>
                <ProgressLabel>%</ProgressLabel>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12} minWidth={280} className='bg-slate-400'>
          <Card>
            <div className='text-center'>Visibility</div>
            <Stats>6,4<span>miles</span></Stats>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12} minWidth={280} className='bg-slate-400'>
          <Card>
            <div className='text-center'>Air Pressure</div>
            <Stats>998<span>mb</span></Stats>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default TodaysHightlights