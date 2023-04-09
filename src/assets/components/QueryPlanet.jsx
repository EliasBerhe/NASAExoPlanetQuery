import React from 'react'
import { Button } from '@mui/material'

const QueryPlanet = () => {
    const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  return (
    <div class="flex flex-col justify-center items-center h-screen">
    <div class="w-[600px] h-64  lg:w-[1000px] h-96">
      <div class=" w-[600px] h-32 px-32 pt-8 lg:w-[1000px] h-64 px-64 pt-8">
      <h1 className='text-white text-4xl lg:text-6xl  '>
     Query Exoplanets
      </h1>
      </div>
      <div class="flex flex-row gap-5   w-[600px] h-32 lg:w-[1000px] h-64">
      <div class="flex  w-64  bg-tertiary rounded-full px-4  ">
       <div class="flex items-center">
       <label class="text-white">Host Name</label>
       </div>

      <div class="flex items-center px-[10%]">
      <select class="min-w-[50px] lg:min-w-[150px] rounded-full bg-slate-400">
        
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
      </div>
   
  </div>
  <div class="flex w-64 bg-tertiary rounded-full px-4">
  <div class="flex items-center">
       <label class="text-white">Discovery Year</label>
       </div>

      <div class="flex items-center px-[10%]">
      <select class="min-w-[40px] lg:min-w-[120px] rounded-full bg-slate-400">
        
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
      </div>
  </div>
  <div class="flex w-64 bg-tertiary rounded-full px-4">
  <div class="flex items-center">
       <label class="text-white">Discovery Faculty</label>
       </div>

      <div class="flex items-center px-[10%]">
      <select class="min-w-[30px] lg:min-w-[120px] rounded-full bg-slate-400">
        
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
      </div>
  </div>
    
      
      </div>
  
   
    </div>
    <div className="flex py-8">
      <Button variant="contained">
    <a href="/query">Search</a>
  </Button>
  
      </div>
  </div>
  )
}

export default QueryPlanet