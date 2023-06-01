import React from 'react'
import { Button } from '@mui/material'

const HomePage = () => {
  return (
    <div class="flex flex-col justify-center items-center h-screen">
  <div class="w-[500px] h-64  lg:w-[1000px] h-96">
    <div class="flex  w-[500px] h-32 px-8 pt-16 lg:w-[1000px] h-64 px-64 pt-8">
    <h1 className='text-white text-3xl lg:text-4xl pt-16 '>
    NASA Exoplanet Query
    </h1>
    </div>
    <div class="w-[500px] h-32  lg:w-[1000px] h-64 px-8">
    <p className='text-white'>
    To date, more than 5,000 exoplanets have been discovered and are considered "confirmed" out of the billions in our galaxy alone. There are thousands of other "candidate" exoplanet detections that require further observations
     in order to say for sure whether or not the exoplanet is real.
    </p>
    <div className='py-4'>
    <Button variant="contained" color="success">
  <a href="/query">Success</a>
</Button>
    </div>
    
    </div>

 
  </div>

</div>
  )
}

export default HomePage