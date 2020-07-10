/*import React,{useEffect, useState} from 'react';
import Cards from './Cards'
import Chart from './Chart'
import CountryPicker from './CountryPicker'

import './App.css';

function App() {
  const [Data,setData]=useState([])
  useEffect(() => {

    async function dataFetch(){
      await fetch('https://covid19.mathdro.id/api')
      .then(response=>response.json())
      .then((result)=>{
        
        setData(result.items);
      })
     
    }
    dataFetch();
  
     
  }, [])
    
  return (
    <div className="App">
  
     <h1>Hello</h1>
     <Cards />
     <Chart />
     <CountryPicker />
    </div>
  );
}

export default App;

*/
import React from 'react';
import Cards from './Cards'
import Chart from './Chart'
import CountryPicker from './CountryPicker'
import {FetchData} from './fetch'

import './App.css';

class App extends React.Component {
  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const FetchedData = await FetchData();
    this.setState({data: FetchedData});
  }
  handleCountryChange=async(country)=>{
    //console.log(country);
    const FetchedData = await FetchData(country);
    this.setState({data: FetchedData, country:country});
    console.log(FetchedData);
  }
   render(){  
    const {data,country}=this.state;
     
  return (
    <div className="App">
     <Cards data={data} />
     <CountryPicker handleCountryChange={this.handleCountryChange} />
     <Chart data={data} country={country}/>
     
    </div>
  );}
}

export default App;

