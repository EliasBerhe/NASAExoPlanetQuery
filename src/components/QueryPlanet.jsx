/* eslint-disable array-callback-return */
import React, { useEffect,useState } from 'react'
import { Button } from '@mui/material'
import axios from "axios";
import Search from './Search';


const QueryPlanet = () => {

    const [yearsArray, setYearsArray] = useState([]);
    const [facultyArray, setFacultyArray] = useState([]);
    const [hostNameArray, setHostNameArray] = useState([]);



    const[year, setYear] = useState("");
    const[faculty, setFaculy] = useState("");
    const[hostName, setHostName] = useState("");
    const[canSearch, setCanSearch] = useState(false)
    const[buttonPressed, setPressed] = useState(false)
   
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

    useEffect(()=>{
        if(year==="" && faculty=="" && hostName ===""){
            setCanSearch(false)
        }
        else{
            setCanSearch(true)
        }
    })

    
    const handleSubmit =() =>{
        if(!canSearch){
            alert("please choose atleast one!")
        }
        else{
            setPressed(true);
        }
       
       
    }
     
    

    const handleYear = (event) => {
        setYear(event.target.value)
    }

    const handleFaculty = (event) => {
        setFaculy(event.target.value)
    }

    const handleHostName = (event) => {
        setHostName(event.target.value)
    }

  
  return (
    
    <div className="flex flex-col justify-center items-center h-screen min-w-[700px]">
    <div className='flex items-center'>
      {buttonPressed?<Search hName = {hostName} year = {year} faculty={faculty} render={buttonPressed} />:""}

      </div>
    <div className={buttonPressed?"hidden":"min-w-[700px] h-64  lg:w-[1000px]"}>
      <div className=" w-[600px] h-32 px-32 pt-8 lg:w-[1000px] h-64 px-64 pt-8">
      <h1 className='text-white text-4xl lg:text-6xl  '>
     Query Exoplanets
      </h1>
      </div>
      <div className="flex flex-col  gap-9   w-[600px]  lg:flex-row lg:h-32 lg:w-[1000px]  ">
        

     
      <div className="flex  w-64  bg-tertiary rounded-full px-4  ">
       <div className="flex items-center">
       <label className="text-white">Host Name</label>
       </div>
 
      <div className="flex items-center px-[10%] min-w-[200px]">
      <select className="min-w-[50px] lg:min-w-[150px] rounded-full bg-slate-400" value ={hostName} onChange={handleHostName}>
        <option></option>
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
       <label className="text-white">Discovery year</label>
       </div>

      <div className="flex items-center px-[10%]">
      <select className="min-w-[50px] lg:min-w-[120px] rounded-full bg-slate-400" value ={year} onChange={handleYear}>
      <option></option>
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
       <label className="text-white">Discovery faculty</label>
       </div>

      <div className="flex items-center px-[10%] min-w-[180px]">
      <select className="min-w-[30px] lg:min-w-[120px] rounded-full bg-slate-400" value ={faculty} onChange={handleFaculty}>
      <option></option>
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
    <div className={buttonPressed?"flex items-start pr-[95%]":"pt-64"}>
      <Button variant="contained" onClick={handleSubmit}>
   {buttonPressed?<a href="query">Back</a>:"Search"} 
   
  </Button>

      </div>
     
     
  </div>

  )
}

export default QueryPlanet