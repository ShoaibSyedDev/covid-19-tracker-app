import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {fetchCountries} from './fetch'

export default function CountryPicker({handleCountryChange}) {
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchCountry=async ()=>{
             setFetchedCountries(await fetchCountries());
        }
        fetchCountry();
       
    },[setFetchedCountries]);
    console.log(fetchedCountries);
        return (
        <div className="div-form">
            <FormControl className="formControl">
                <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
            
        </div>
    )
}
