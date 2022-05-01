import React from 'react'
import CloudGif from '../assets/images/partly-cloudy.svg'
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <div style={{ backgroundColor: 'var(--custom-darkblue-200)', height: '100vh' }} className='flex justify-center flex-col center'>
      <img src={CloudGif} alt="gif" className='w-1/3 mx-auto' />
      <div style={{ backgroundColor: 'var(--custom-darkblue-100)' }} className='w-2/5 h-3 rounded-md m-auto mt-0 overflow-hidden'>
        <motion.div
          style={{ backgroundColor: 'var(--custom-grey-100)' }}
          className='w-1/4 h-3 rounded-md m-0'
          animate={{ x: 400 }}
          initial={{ x: -30 }}
          transition={{ repeat: Infinity, type: 'keyframes', repeatType: "mirror", duration: 1 }}
        ></motion.div>
      </div>
    </div>
  )
}

export default Loading