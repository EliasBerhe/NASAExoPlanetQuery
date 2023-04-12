import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Search = (props) => {

    const [planetData, setData] = useState([]);
    const [parameters, setParameters] = useState([props.hName, props.year, props.faculty])
    const [searchedData, setSearcheData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8090/table")
        .then((response)=>{
            //console.log(response.data);
     
            setData(response.data)
           // console.log(yearsArray)
        })

        .catch((error)=>{
            console.log(error)
        })
       
   compare();
      
    console.log(searchedData)
    },[])

    const compare = () =>{
        for(let i=0; i<planetData.length;i++){
            if(planetData[i].discoverYear===props.year || props.year===""){
                if(planetData[i].discoverYear===props.hName || props.hName===""){
                    if(planetData[i].discoverYear===props.faculty || props.faculty===""){
                        setSearcheData(prevArray => [...prevArray, planetData[i]]);
                    }
                }
            }
               
            }
    }
  



    
  return (
    <div className="min-w-[600px] min-h-[600px] rounded-[100px]">
   <table className = "table-fixed border-2">

    <tr className='text-white border-2'>
        <th>Planet</th>
        <th>discoveryYear</th>
        <th>discoveryFaculty</th>
        <th>discoveryMethod</th>
        <th>hostName</th>
    </tr>
    {searchedData.map((data, index) => (
    <tr key={index}>
       <td className='text-white text-2xl '>{data.planet}</td>
       <td className="text-white px-16">{data.discoverYear}</td>
       <td className="text-white px-16">{data.discoveryFaculty}</td>
       <td className="text-white px-16">{data.discoveryMethod}</td>
       <td className="text-white px-16">{data.hostName}</td>
       </tr>
      ))}

   </table>

        
        
    
    </div>
  )
}

export default Search