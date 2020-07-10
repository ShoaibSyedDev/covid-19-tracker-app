
import axios from 'axios'

const url='https://covid19.mathdro.id/api'
 
export const FetchData = async (country)=>{
  let changeableUrl=url;
  if(country){
    changeableUrl=`${url}/countries/${country}`;
  }
    
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(changeableUrl);
      
       return {confirmed,recovered,deaths,lastUpdate};
       
    } catch (error) {
      console.log(error);
      
        
    }
}

export const fetchDailyData=async()=>{
  try{
    const {data} =await axios.get(`${url}/daily`);
    const modified=data.map((dailyData)=>({
      confirmed:dailyData.confirmed.total,
      deaths:dailyData.deaths.total,
      date:dailyData.reportDate,


    }));

return modified;
  }
  catch(error){

  }
  
}


export const fetchCountries =  async ()=>{
  try{
    const {data:{countries}}=await axios.get(`${url}/countries`);
    
    return countries.map((country)=>country.name);

  } 
  catch(error){

  }
}


















/*
import React, {useEffect,useState} from 'react'

export default function FetchData() {
    const [Data,setData]=useState([])
    useEffect(() => {

      async function dataFetch(){
        const response=await fetch('https://covid19.mathdro.id/api')
        const orignalData=await response.json();
          console.log(orignalData);
          setData(orignalData);
      }
      dataFetch();
       
    }, [])

    return (
        <div>
           <h1>{Data.map(item=>(<li>
            {item.deaths} {item.recoverd}
          </li>))}</h1>
        </div>
    )
}
*/
