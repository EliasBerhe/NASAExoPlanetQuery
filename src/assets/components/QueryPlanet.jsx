/* eslint-disable array-callback-return */
import React, { useEffect,useState } from 'react'
import { Button } from '@mui/material'
import axios from "axios";
const QueryPlanet = () => {

    const [yearsArray, setYearsArray] = useState([]);
    const [facultyArray, setFacultyArray] = useState([]);
    const [hostNameArray, setHostNameArray] = useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:8090/years")
        .then((response)=>{
            //console.log(response.data[0]);
            setYearsArray(response.data);
           
           // console.log(yearsArray)
        })

        .catch((error)=>{
            console.log(error)
        })

        axios.get("http://localhost:8090/hostNames")
        .then((response)=>{
            //console.log(response.data[0]);
            setHostNameArray(response.data);
           
           // console.log(hostNameArray)
        })

        .catch((error)=>{
            console.log(error)
        })


        axios.get("http://localhost:8090/faculties")
        .then((response)=>{
            //console.log(response.data[0]);
            setFacultyArray(response.data);
           
            //console.log(hostNameArray)
        })

        .catch((error)=>{
            console.log(error)
        })

        
    },[])


  
  return (
    
    <div className="flex flex-col justify-center items-center h-screen">
         
    <div className="w-[700px] h-64  lg:w-[1000px] h-96">
      <div className=" w-[600px] h-32 px-32 pt-8 lg:w-[1000px] h-64 px-64 pt-8">
      <h1 className='text-white text-4xl lg:text-6xl  '>
     Query Exoplanets
      </h1>
      </div>
      <div className="flex flex-row gap-5   w-[600px] h-32 lg:w-[1000px] h-64">
      <div className="flex  w-64  bg-tertiary rounded-full px-4  ">
       <div className="flex items-center">
       <label className="text-white">Host Name</label>
       </div>
 
      <div className="flex items-center px-[10%] min-w-[200px]">
      <select className="min-w-[50px] lg:min-w-[150px] rounded-full bg-slate-400">
      {hostNameArray.map((data, index) => (
        <option key={index} value={data.hostName}>
          {data.hostName}
        </option>
      ))}
    </select>
      </div>
   
  </div>
  <div className="flex w-64 bg-tertiary rounded-full px-4">
  <div className="flex items-center">
       <label className="text-white">Discovery Year</label>
       </div>

      <div className="flex items-center px-[10%]">
      <select className="min-w-[40px] lg:min-w-[120px] rounded-full bg-slate-400">
        
      {yearsArray.map((data, index) => (
        <option key={index} value={data.discYear}>
          {data.discYear}
        </option>
      ))}
    

    </select>
      </div>
  </div>
  <div className="flex w-64 bg-tertiary rounded-full px-4">
  <div className="flex items-center ">
       <label className="text-white">Discovery Faculty</label>
       </div>

      <div className="flex items-center px-[10%] min-w-[180px]">
      <select className="min-w-[30px] lg:min-w-[120px] rounded-full bg-slate-400">
      {facultyArray.map((data, index) => (
        <option key={index} value={data.discFaculty}>
          {data.discFaculty}
        </option>
      ))}
    
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