import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Search = (props) => {

    const [planetData, setData] = useState([]);
    const [change,setC] = useState(false)
    const [parameters, setParameters] = useState([props.hName, props.year, props.faculty])
    const [searchedData, setSearcheData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8090/table")
        .then((response)=>{
            //console.log(response.data);
     
            setData(response.data)
            setC(true)
           // console.log(yearsArray)
        })

        .catch((error)=>{
            console.log(error)
        })
       
   compare();
      
    console.log(searchedData)
    },[change])

    const compare = () =>{
        for(let i=0; i<planetData.length;i++){
            if(planetData[i].discoverYear===props.year || props.year===""){
                if(planetData[i].hostName===props.hName || props.hName===""){
                    if(planetData[i].discoveryFaculty===props.faculty || props.faculty===""){
                        setSearcheData(prevArray => [...prevArray, planetData[i]]);
                    }
                }
            }
               
            }
    }
  



    
  return (
    <div className=" xs:max-w-[450px] lg:min-w-[1000px] overflow-y-scroll  max-h-[90vh] py-16">
  {compare}
   <table className = "table-fixed border-2 rounded-[100px]">
  
    <tr className='bg-secondary text-tertiary border-2'>
        <th>Planet</th>
        <th>discoveryYear</th>
        <th>discoveryFaculty</th>
        <th>discoveryMethod</th>
        <th>hostName</th>
    
    </tr>
    {searchedData.map((data, index) => (
    <tr key={index} className={index%2===1?"bg-white text-tertiary":"text-white"}>
       <td className='text-2xl '>{data.planet}</td>
       <td className="px-16">{data.discoverYear}</td>
       <td className="px-16">{data.discoveryFaculty}</td>
       <td className="px-16">{data.discoveryMethod}</td>
       <td className="px-16">{data.hostName}</td>
       </tr>
      ))}

   </table>

        
        
    
    </div>
  )
}

export default Search